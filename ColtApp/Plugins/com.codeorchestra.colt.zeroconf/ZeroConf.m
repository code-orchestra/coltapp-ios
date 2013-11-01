//
//  ZeroConf.m
//  ColtApp
//
//  Created by Dima Kruk on 10/11/13.
//
//

#import "ZeroConf.h"
#include <arpa/inet.h>

@implementation ZeroConf

- (void)watch:(CDVInvokedUrlCommand*)command{
    NSLog(@"watch: %@", command.callbackId);
    NSString* arg = [command.arguments objectAtIndex:0];
    NSArray* arr = [arg componentsSeparatedByString:@"."];
    type = [[[arr objectsAtIndexes:[NSIndexSet
                                              indexSetWithIndexesInRange:NSMakeRange(0, arr.count - 2)
                                              ]
                        ] arrayByAddingObject:@""
                       ] componentsJoinedByString:@"."];
    domain = [NSString stringWithFormat:@"%@.", [arr objectAtIndex:arr.count - 2]];
    
    callbackId = command.callbackId;
    
    [self start];
}

- (void)start {
    if (serviceBrowser == nil) {
        serviceBrowser = [[NSNetServiceBrowser alloc] init];
        serviceBrowser.delegate = (id)self;
    }
    if (self.searching) {
        for (NSNetService *service in self.services) {
            [self netServiceDidResolveAddress:service];
        }
    } else {
        [serviceBrowser searchForServicesOfType:type inDomain:domain];
    }
}

- (NSString *)copyStringFromTXTDict:(NSDictionary *)dict which:(NSString*)which {
    // Helper for getting information from the TXT data
    NSData* data = [dict objectForKey:which];
    NSString *resultString = nil;
    if (data) {
        resultString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    }
    return resultString;
}

- (void)sendCallback:(NSString*) action sender:(NSNetService *)sender {
    NSMutableDictionary *resultDic = [[NSMutableDictionary alloc] init];
    [resultDic setObject:action forKey:@"action"];
    
    NSDictionary *dictionary = [NSNetService dictionaryFromTXTRecordData:[sender TXTRecordData]];
    [dictionary allKeys];
    for (NSString *key in dictionary) {
        //NSLog(@"[%@] = %@", key, [self copyStringFromTXTDict:dictionary which:key]);
    }
    
    NSMutableDictionary* service = [[NSMutableDictionary alloc] init];
    [service setObject:sender.domain forKey:@"domain"];
    [service setObject:[NSString stringWithFormat:@"%d", sender.port] forKey:@"port"];
    [service setObject:sender.name forKey:@"name"];
    if ([sender.addresses count] > 0) {
        struct sockaddr_in *socketAddress = (struct sockaddr_in *) [sender.addresses[0] bytes];
        [service setObject:[NSString stringWithFormat:@"%s", inet_ntoa(socketAddress->sin_addr)] forKey:@"addresses"];
    }
    
    NSMutableDictionary* txtData = [[NSMutableDictionary alloc] init];
    for (NSString *key in dictionary) {
        [txtData setObject:[self copyStringFromTXTDict:dictionary which:key] forKey:key];
    }
    [service setObject:txtData forKey:@"txtData"];
    
    [resultDic setObject:service forKey:@"service"];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:resultDic];
    [pluginResult setKeepCallbackAsBool:YES];
    NSLog(@"callbackId = %@", callbackId);
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
    
}

// NSNetServiceBrowser delegate methods for service browsing
- (void)netServiceBrowserWillSearch:(NSNetServiceBrowser *)browser{
    NSLog(@"netServiceBrowserWillSearch");
    self.searching = YES;
}
- (void)netServiceBrowserDidStopSearch:(NSNetServiceBrowser *)browser{
    NSLog(@"netServiceBrowserDidStopSearch");
    self.searching = NO;
}
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
             didNotSearch:(NSDictionary *)errorDict{
    NSLog(@"netServiceBrowser didNotSearch");
    for (NSString *key in errorDict) {
        NSLog(@"[%@] = %@", key, [errorDict objectForKey:key]);
    }
    self.searching = NO;
    
    isRestarted = YES;
    [self start];
}
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
           didFindService:(NSNetService *)aNetService
               moreComing:(BOOL)moreComing{
    if (self.services == nil) {
        self.services = [[NSMutableArray alloc] init];
    }
    
    NSLog(@"aNetService.name ====> %@", aNetService.name);
    NSLog(@"%@", aNetService);
    ///-----
    NSMutableDictionary* service = [[NSMutableDictionary alloc] init];
    [service setObject:aNetService.domain forKey:@"domain"];
    [service setObject:[NSString stringWithFormat:@"%d", aNetService.port] forKey:@"port"];
    [service setObject:aNetService.name forKey:@"name"];
    if ([aNetService.addresses count] > 0) {
        struct sockaddr_in *socketAddress = (struct sockaddr_in *) [aNetService.addresses[0] bytes];
        [service setObject:[NSString stringWithFormat:@"%s", inet_ntoa(socketAddress->sin_addr)] forKey:@"addresses"];
    }
    for (NSString *key in service) {
        NSLog(@"[%@] = %@", key, [service objectForKey:key]);
    }
    ///-----
    
    [aNetService setDelegate:(id)self];
    
    if (isRestarted) {
        if (tmpServices == nil) {
            tmpServices = [self.services copy];
            [self.services removeAllObjects];
        }
        
        [self.services addObject:aNetService];
        
        if ([tmpServices indexOfObject:aNetService] == NSNotFound) {
            [aNetService resolveWithTimeout:0.0];
        }
    } else {
        [self.services addObject:aNetService];
        [aNetService resolveWithTimeout:0.0];
    }
    
    if (!moreComing && isRestarted) {
        NSMutableArray *forRemove = [[NSMutableArray alloc] init];
        for (NSNetService * service in tmpServices) {
            if ([self.services indexOfObject:service] == NSNotFound) {
                [forRemove addObject:service];
            }
        }
        while (forRemove.count > 0) {
            NSNetService * service = [forRemove firstObject];
            [self.services removeObject:service];
            [forRemove removeObject:service];
            [self netServiceBrowser:browser didRemoveService:service moreComing:forRemove.count > 0];
        }
        
        tmpServices = nil;
        
        isRestarted = NO;
    }
}
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
         didRemoveService:(NSNetService *)aNetService
               moreComing:(BOOL)moreComing{
    NSLog(@"netServiceBrowser didRemoveService");
    [self.services removeObject:aNetService];
    [self sendCallback:@"removed" sender:aNetService];
}

// NSNetServiceDelegate delegate methods for service delegate
- (void)netServiceWillPublish:(NSNetService *)sender {
    NSLog(@"netServiceWillPublish");
}
- (void)netServiceDidPublish:(NSNetService *)sender {
    NSLog(@"netServiceDidPublish");
    
}
- (void)netService:(NSNetService *)sender didNotPublish:(NSDictionary *)errorDict {
    NSLog(@"netService didNotPublish");
}
- (void)netServiceWillResolve:(NSNetService *)sender {
    NSLog(@"netServiceWillResolve");
}

- (void)netServiceDidResolveAddress:(NSNetService *)sender{
    NSLog(@"netServiceDidResolveAddress");
    [self sendCallback:@"added" sender:sender];
}

- (void)netService:(NSNetService *)sender didUpdateTXTRecordData:(NSData *)data {
    NSLog(@"netService didUpdateTXTRecordData");
}
- (void)netService:(NSNetService *)sender didNotResolve:(NSDictionary *)errorDict{
    NSLog(@"netService didNotResolve");
}
- (void)netServiceDidStop:(NSNetService *)sender {
    NSLog(@"netServiceDidStop");
}
@end

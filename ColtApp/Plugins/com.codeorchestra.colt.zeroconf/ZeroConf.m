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
    NSString* arg = [command.arguments objectAtIndex:0];
    NSArray* arr = [arg componentsSeparatedByString:@"."];
    type = [[[arr objectsAtIndexes:[NSIndexSet
                                              indexSetWithIndexesInRange:NSMakeRange(0, arr.count - 2)
                                              ]
                        ] arrayByAddingObject:@""
                       ] componentsJoinedByString:@"."];
    domain = [NSString stringWithFormat:@"%@.", [arr objectAtIndex:arr.count - 2]];

    [self start];
    
    callbackId = [command.callbackId retain];
}

- (void)start {
    if (serviceBrowser == nil) {
        serviceBrowser = [[NSNetServiceBrowser alloc] init];
        [serviceBrowser setDelegate: (id)self];
    }
    
    [serviceBrowser searchForServicesOfType:type inDomain:domain];
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
        NSLog(@"[%@] = %@", key, [self copyStringFromTXTDict:dictionary which:key]);
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
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
    
}

// NSNetServiceBrowser delegate methods for service browsing
- (void)netServiceBrowserWillSearch:(NSNetServiceBrowser *)browser{
    NSLog(@"netServiceBrowserWillSearch");
}
- (void)netServiceBrowserDidStopSearch:(NSNetServiceBrowser *)browser{
    NSLog(@"netServiceBrowserDidStopSearch");
}
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
             didNotSearch:(NSDictionary *)errorDict{
    NSLog(@"netServiceBrowser didNotSearch");
    [self start];
    
}
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
           didFindService:(NSNetService *)aNetService
               moreComing:(BOOL)moreComing{
    if (services == nil) {
        services = [[NSMutableArray alloc] init];
    }
    NSLog(@"aNetService.name ====> %@", aNetService.name);
    [services addObject:aNetService];
    [aNetService setDelegate:(id)self];
    [aNetService resolveWithTimeout:0.0];
}
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
         didRemoveService:(NSNetService *)aNetService
               moreComing:(BOOL)moreComing{
    NSLog(@"netServiceBrowser didRemoveService");
    [services removeObject:aNetService];
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

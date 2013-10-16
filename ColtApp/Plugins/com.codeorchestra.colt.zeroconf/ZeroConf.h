//
//  ZeroConf.h
//  ColtApp
//
//  Created by Dima Kruk on 10/11/13.
//
//

#import <Cordova/CDVPlugin.h>

@interface ZeroConf : CDVPlugin {
    NSString* callbackId;
    NSString* type;
    NSString* domain;
    
    NSNetServiceBrowser *serviceBrowser;
    
    NSMutableArray *services;
}

- (void)watch:(CDVInvokedUrlCommand*)command;
@end

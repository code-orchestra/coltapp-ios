/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var deviceNameToSendData;
var services = [];
var zombieServices = [];

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        $("#mainPage").on("click", "#networkDevice", function(){
                          deviceNameToSendData = $(this).text();
                          console.log(deviceNameToSendData);
                          console.log(services[deviceNameToSendData]);
                          console.log(services[deviceNameToSendData]["txtData"]["url"]);
                          window.open(services[deviceNameToSendData]["txtData"]["url"], '_system', 'location=yes');
                    });
        
        $("#deviceListview").append('<li data-role="list-divider">Colt projects:</li>');
        $("#deviceListview").listview("refresh");
        $("#browserPage").trigger("create");
        $("#deviceListview").show("slow");
        
        var add = function (service) {
            //console.log("add");
            checkZombie(service)
            if(zombieServices[service["name"]] != undefined){
                //console.log("zombie");
            } else if(services[service["name"]] != undefined) {
                //console.log("updated");
                services[service["name"]] = service
            } else {
                services[service["name"]] = service
                $("#deviceListview").append('<li class="more"><a href="#" id="networkDevice">'+service["name"]+'</a></li>');
                $("#deviceListview").listview("refresh");
                $("#browserPage").trigger("create");
                $("#deviceListview").show("slow");
                //console.log("added");
            }
        }
        
        var checkZombie = function (service) {
            var result = false
            var serviceName = service["name"]
            var arr = serviceName.split("::")
            for (var key in services) {
                var key_arr = key.split("::")
                if (arr[2] == key_arr[2]) {
                    if(arr[1] > key_arr[1]) {
                        console.log(key + " is zombie")
                        zombieServices[key] = services[key]
                        remove(services[key])
                    } else {
                        console.log(serviceName + " is zombie")
                        zombieServices[serviceName] = service
                        result = true
                    }
                }
            }
            return result
        }
        
        var remove = function (service) {
            var serviceName = service["name"];
            
            var deviceCount = 0;
            $("#deviceListview #networkDevice").each(function(){
                if ( $(this).text() == serviceName ){
                    $(this).parent().parent().parent().remove(); // remove the device from the listview
                    $("#deviceListview").listview("refresh");
                    services[service["name"]] = null;
                }
                deviceCount++;
            });
        }
        
        var callBack = function (o) {
            switch(o["action"]) {
                case "added":
                    add(o["service"])
                    break;
                case "removed":
                    console.log(o["service"]);
                    remove(o["service"]);
                    break;
            }
        }
        
        ZeroConf.watch("_colt._tcp.local.", callBack);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    }
};


                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("../../../live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.geolocation/www/Position.js0", "(function(require, exports, module) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.geolocation\/www\/Position.js[0]: function(require, exports, module)\"); try {\n                  var Coordinates = require(\'.\/Coordinates\');\n  var Position = function(coords, timestamp) {\n  \n                        var _colt1 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.geolocation\/www\/Position.js1_\" + __coltScope)\n                        if (_colt1 == null) {\n                            try {\n                                _colt1 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.geolocation\/www\/Position.js1\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.geolocation\/www\/Position.js\", \"live method plugins\/org.apache.cordova.geolocation\/www\/Position.js[1]: function(coords, timestamp) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.geolocation\/www\/Position.js1_\" + __coltScope, _colt1)\n                        }\n                        return _colt1.apply(this, arguments)\n            };\n  module.exports = Position;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.geolocation\/www\/Position.js\", \"live method plugins\/org.apache.cordova.geolocation\/www\/Position.js[0]: function(require, exports, module) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.geolocation\/www\/Position.js[0]: function(require, exports, module)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.geolocation/www/Position.js1", "(function(coords, timestamp) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.geolocation\/www\/Position.js[1]: function(coords, timestamp)\"); try {\n                  if (coords) \n  {\n    this.coords = new Coordinates(coords.latitude, coords.longitude, coords.altitude, coords.accuracy, coords.heading, coords.velocity, coords.altitudeAccuracy);\n  } else {\n    this.coords = new Coordinates();\n  }\n  this.timestamp = (timestamp !== undefined) ? timestamp : new Date();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.geolocation\/www\/Position.js\", \"live method plugins\/org.apache.cordova.geolocation\/www\/Position.js[1]: function(coords, timestamp) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.geolocation\/www\/Position.js[1]: function(coords, timestamp)\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"plugins/org.apache.cordova.geolocation/www/Position.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"plugins/org.apache.cordova.geolocation/www/Position.js");
cordova.define("org.apache.cordova.geolocation.Position", function(require, exports, module) {
  
                        var _colt0 = LiveCodeRegistry.getInstance().getCachedMethod("plugins/org.apache.cordova.geolocation/www/Position.js0_" + __coltScope)
                        if (_colt0 == null) {
                            try {
                                _colt0 = eval(LiveCodeRegistry.getInstance().getMethod("plugins/org.apache.cordova.geolocation/www/Position.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "plugins/org.apache.cordova.geolocation/www/Position.js", "live method plugins/org.apache.cordova.geolocation/www/Position.js[0]: function(require, exports, module) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("plugins/org.apache.cordova.geolocation/www/Position.js0_" + __coltScope, _colt0)
                        }
                        return _colt0.apply(this, arguments)
            });

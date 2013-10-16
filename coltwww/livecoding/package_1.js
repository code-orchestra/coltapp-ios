LiveCodeRegistry.getInstance().putMethod("js/index.js0", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/index.js[0]: function()\"); try {\n                  this.bindEvents();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[0]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/index.js[0]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/index.js-1", "(function(service) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/index.js[-1]: function(service)\"); try {\n                  console.log(\"added\");\n  services[service[\"name\"]] = service;\n  $(\"#deviceListview\").append(\'<li class=\"more\"><a href=\"#\" id=\"networkDevice\">\' + service[\"name\"] + \'<\/a><\/li>\');\n  $(\"#deviceListview\").listview(\"refresh\");\n  $(\"#browserPage\").trigger(\"create\");\n  $(\"#deviceListview\").show(\"slow\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[-1]: function(service) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/index.js[-1]: function(service)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/index.js1", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/index.js[1]: function()\"); try {\n                  document.addEventListener(\'deviceready\', this.onDeviceReady, false);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[1]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/index.js[1]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/index.js3", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/index.js[3]: function()\"); try {\n                  $(\"#mainPage\").on(\"click\", \"#networkDevice\", function() {\n  \n                        var _colt4 = LiveCodeRegistry.getInstance().getCachedMethod(\"js\/index.js4_\" + __coltScope)\n                        if (_colt4 == null) {\n                            try {\n                                _colt4 = eval(LiveCodeRegistry.getInstance().getMethod(\"js\/index.js4\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[4]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"js\/index.js4_\" + __coltScope, _colt4)\n                        }\n                        return _colt4.apply(this, arguments)\n            });\n  $(\"#deviceListview\").append(\'<li data-role=\"list-divider\">Colt projects:<\/li>\');\n  $(\"#deviceListview\").listview(\"refresh\");\n  $(\"#browserPage\").trigger(\"create\");\n  $(\"#deviceListview\").show(\"slow\");\n  var add = function(service) {\n  \n                        var _colt1 = LiveCodeRegistry.getInstance().getCachedMethod(\"js\/index.js-1_\" + __coltScope)\n                        if (_colt1 == null) {\n                            try {\n                                _colt1 = eval(LiveCodeRegistry.getInstance().getMethod(\"js\/index.js-1\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[-1]: function(service) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"js\/index.js-1_\" + __coltScope, _colt1)\n                        }\n                        return _colt1.apply(this, arguments)\n            };\n  var callBack = function(o) {\n  \n                        var _colt5 = LiveCodeRegistry.getInstance().getCachedMethod(\"js\/index.js5_\" + __coltScope)\n                        if (_colt5 == null) {\n                            try {\n                                _colt5 = eval(LiveCodeRegistry.getInstance().getMethod(\"js\/index.js5\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[5]: function(o) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"js\/index.js5_\" + __coltScope, _colt5)\n                        }\n                        return _colt5.apply(this, arguments)\n            };\n  ZeroConf.watch(\"_colt._tcp.local.\", callBack);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[3]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/index.js[3]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/index.js4", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/index.js[4]: function()\"); try {\n                  deviceNameToSendData = $(this).text();\n  console.log(deviceNameToSendData);\n  console.log(services[deviceNameToSendData]);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[4]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/index.js[4]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/index.js5", "(function(o) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/index.js[5]: function(o)\"); try {\n                  switch (o[\"action\"]) {\n    case \"added\":\n      owner.onAdded(o[\"service\"]);\n      break;\n    case \"removed\":\n      break;\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[5]: function(o) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/index.js[5]: function(o)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/index.js7", "(function(id) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/index.js[7]: function(id)\"); try {\n                  console.log(\'Received Event: \' + id);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/index.js\", \"live method js\/index.js[7]: function(id) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/index.js[7]: function(id)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/index.js6", "( function(){} )")

var app = {initialize: function() {
  
                        var _colt0 = LiveCodeRegistry.getInstance().getCachedMethod("js/index.js0_" + __coltScope)
                        if (_colt0 == null) {
                            try {
                                _colt0 = eval(LiveCodeRegistry.getInstance().getMethod("js/index.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/index.js", "live method js/index.js[0]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/index.js0_" + __coltScope, _colt0)
                        }
                        return _colt0.apply(this, arguments)
            }, bindEvents: function() {
  
                        var _colt2 = LiveCodeRegistry.getInstance().getCachedMethod("js/index.js1_" + __coltScope)
                        if (_colt2 == null) {
                            try {
                                _colt2 = eval(LiveCodeRegistry.getInstance().getMethod("js/index.js1"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/index.js", "live method js/index.js[1]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/index.js1_" + __coltScope, _colt2)
                        }
                        return _colt2.apply(this, arguments)
            }, onDeviceReady: function() {
  
                        var _colt3 = LiveCodeRegistry.getInstance().getCachedMethod("js/index.js3_" + __coltScope)
                        if (_colt3 == null) {
                            try {
                                _colt3 = eval(LiveCodeRegistry.getInstance().getMethod("js/index.js3"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/index.js", "live method js/index.js[3]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/index.js3_" + __coltScope, _colt3)
                        }
                        return _colt3.apply(this, arguments)
            }, receivedEvent: function(id) {
  
                        var _colt6 = LiveCodeRegistry.getInstance().getCachedMethod("js/index.js7_" + __coltScope)
                        if (_colt6 == null) {
                            try {
                                _colt6 = eval(LiveCodeRegistry.getInstance().getMethod("js/index.js7"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/index.js", "live method js/index.js[7]: function(id) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/index.js7_" + __coltScope, _colt6)
                        }
                        return _colt6.apply(this, arguments)
            }};


LiveCodeRegistry.getInstance().setInspectables([],"js/index.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(1,"js/index.js");
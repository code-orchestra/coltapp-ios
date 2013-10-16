
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("../live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("spec/index.js0", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[0]: function()\"); try {\n                  describe(\'initialize\', function() {\n  \n                        var _colt1 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js1_\" + __coltScope)\n                        if (_colt1 == null) {\n                            try {\n                                _colt1 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js1\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[1]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js1_\" + __coltScope, _colt1)\n                        }\n                        return _colt1.apply(this, arguments)\n            });\n  describe(\'onDeviceReady\', function() {\n  \n                        var _colt6 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js6_\" + __coltScope)\n                        if (_colt6 == null) {\n                            try {\n                                _colt6 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js6\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[6]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js6_\" + __coltScope, _colt6)\n                        }\n                        return _colt6.apply(this, arguments)\n            });\n  describe(\'receivedEvent\', function() {\n  \n                        var _colt8 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js8_\" + __coltScope)\n                        if (_colt8 == null) {\n                            try {\n                                _colt8 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js8\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[8]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js8_\" + __coltScope, _colt8)\n                        }\n                        return _colt8.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[0]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[0]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js1", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[1]: function()\"); try {\n                  it(\'should bind deviceready\', function() {\n  \n                        var _colt2 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js2_\" + __coltScope)\n                        if (_colt2 == null) {\n                            try {\n                                _colt2 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js2\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[2]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js2_\" + __coltScope, _colt2)\n                        }\n                        return _colt2.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[1]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[1]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js2", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[2]: function()\"); try {\n                  runs(function() {\n  \n                        var _colt3 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js3_\" + __coltScope)\n                        if (_colt3 == null) {\n                            try {\n                                _colt3 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js3\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[3]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js3_\" + __coltScope, _colt3)\n                        }\n                        return _colt3.apply(this, arguments)\n            });\n  waitsFor(function() {\n  \n                        var _colt4 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js4_\" + __coltScope)\n                        if (_colt4 == null) {\n                            try {\n                                _colt4 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js4\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[4]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js4_\" + __coltScope, _colt4)\n                        }\n                        return _colt4.apply(this, arguments)\n            }, \'onDeviceReady should be called once\', 500);\n  runs(function() {\n  \n                        var _colt5 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js5_\" + __coltScope)\n                        if (_colt5 == null) {\n                            try {\n                                _colt5 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js5\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[5]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js5_\" + __coltScope, _colt5)\n                        }\n                        return _colt5.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[2]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[2]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js3", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[3]: function()\"); try {\n                  spyOn(app, \'onDeviceReady\');\n  app.initialize();\n  helper.trigger(window.document, \'deviceready\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[3]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[3]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js4", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[4]: function()\"); try {\n                  return (app.onDeviceReady.calls.length > 0);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[4]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[4]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js5", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[5]: function()\"); try {\n                  expect(app.onDeviceReady).toHaveBeenCalled();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[5]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[5]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js6", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[6]: function()\"); try {\n                  it(\'should report that it fired\', function() {\n  \n                        var _colt7 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js7_\" + __coltScope)\n                        if (_colt7 == null) {\n                            try {\n                                _colt7 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js7\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[7]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js7_\" + __coltScope, _colt7)\n                        }\n                        return _colt7.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[6]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[6]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js7", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[7]: function()\"); try {\n                  spyOn(app, \'receivedEvent\');\n  app.onDeviceReady();\n  expect(app.receivedEvent).toHaveBeenCalledWith(\'deviceready\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[7]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[7]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js8", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[8]: function()\"); try {\n                  beforeEach(function() {\n  \n                        var _colt9 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js9_\" + __coltScope)\n                        if (_colt9 == null) {\n                            try {\n                                _colt9 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js9\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[9]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js9_\" + __coltScope, _colt9)\n                        }\n                        return _colt9.apply(this, arguments)\n            });\n  it(\'should hide the listening element\', function() {\n  \n                        var _colta = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js10_\" + __coltScope)\n                        if (_colta == null) {\n                            try {\n                                _colta = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js10\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[10]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js10_\" + __coltScope, _colta)\n                        }\n                        return _colta.apply(this, arguments)\n            });\n  it(\'should show the received element\', function() {\n  \n                        var _coltb = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/index.js11_\" + __coltScope)\n                        if (_coltb == null) {\n                            try {\n                                _coltb = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/index.js11\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[11]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/index.js11_\" + __coltScope, _coltb)\n                        }\n                        return _coltb.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[8]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[8]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js9", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[9]: function()\"); try {\n                  var el = document.getElementById(\'stage\');\n  el.innerHTML = [\'<div id=\"deviceready\">\', \'    <p class=\"event listening\">Listening<\/p>\', \'    <p class=\"event received\">Received<\/p>\', \'<\/div>\'].join(\'\\n\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[9]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[9]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js10", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[10]: function()\"); try {\n                  app.receivedEvent(\'deviceready\');\n  var displayStyle = helper.getComputedStyle(\'#deviceready .listening\', \'display\');\n  expect(displayStyle).toEqual(\'none\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[10]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[10]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/index.js11", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/index.js[11]: function()\"); try {\n                  app.receivedEvent(\'deviceready\');\n  var displayStyle = helper.getComputedStyle(\'#deviceready .received\', \'display\');\n  expect(displayStyle).toEqual(\'block\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/index.js\", \"live method spec\/index.js[11]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/index.js[11]: function()\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"spec/index.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"spec/index.js");
describe('app', function() {
  
                        var _colt0 = LiveCodeRegistry.getInstance().getCachedMethod("spec/index.js0_" + __coltScope)
                        if (_colt0 == null) {
                            try {
                                _colt0 = eval(LiveCodeRegistry.getInstance().getMethod("spec/index.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/index.js", "live method spec/index.js[0]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/index.js0_" + __coltScope, _colt0)
                        }
                        return _colt0.apply(this, arguments)
            });

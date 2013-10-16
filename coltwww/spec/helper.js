
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("../live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("spec/helper.js0", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/helper.js[0]: function()\"); try {\n                  document.getElementById(\'stage\').innerHTML = \'\';\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/helper.js\", \"live method spec\/helper.js[0]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/helper.js[0]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/helper.js1", "(function(obj, name) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/helper.js[1]: function(obj, name)\"); try {\n                  var e = document.createEvent(\'Event\');\n  e.initEvent(name, true, true);\n  obj.dispatchEvent(e);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/helper.js\", \"live method spec\/helper.js[1]: function(obj, name) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/helper.js[1]: function(obj, name)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/helper.js2", "(function(querySelector, property) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/helper.js[2]: function(querySelector, property)\"); try {\n                  var element = document.querySelector(querySelector);\n  return window.getComputedStyle(element).getPropertyValue(property);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/helper.js\", \"live method spec\/helper.js[2]: function(querySelector, property) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/helper.js[2]: function(querySelector, property)\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"spec/helper.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"spec/helper.js");
afterEach(function() {
  
                        var _colt0 = LiveCodeRegistry.getInstance().getCachedMethod("spec/helper.js0_" + __coltScope)
                        if (_colt0 == null) {
                            try {
                                _colt0 = eval(LiveCodeRegistry.getInstance().getMethod("spec/helper.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/helper.js", "live method spec/helper.js[0]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/helper.js0_" + __coltScope, _colt0)
                        }
                        return _colt0.apply(this, arguments)
            });
var helper = {trigger: function(obj, name) {
  
                        var _colt1 = LiveCodeRegistry.getInstance().getCachedMethod("spec/helper.js1_" + __coltScope)
                        if (_colt1 == null) {
                            try {
                                _colt1 = eval(LiveCodeRegistry.getInstance().getMethod("spec/helper.js1"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/helper.js", "live method spec/helper.js[1]: function(obj, name) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/helper.js1_" + __coltScope, _colt1)
                        }
                        return _colt1.apply(this, arguments)
            }, getComputedStyle: function(querySelector, property) {
  
                        var _colt2 = LiveCodeRegistry.getInstance().getCachedMethod("spec/helper.js2_" + __coltScope)
                        if (_colt2 == null) {
                            try {
                                _colt2 = eval(LiveCodeRegistry.getInstance().getMethod("spec/helper.js2"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/helper.js", "live method spec/helper.js[2]: function(querySelector, property) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/helper.js2_" + __coltScope, _colt2)
                        }
                        return _colt2.apply(this, arguments)
            }};

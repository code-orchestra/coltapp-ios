
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("./live.js");
                }
        
LiveCodeRegistry.getInstance().setInspectables([],"index.html.0.1.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"index.html.0.1.js");
app.initialize();

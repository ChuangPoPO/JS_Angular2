"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule)
    .then(function (msg) { return console.log("Bootstrap success: " + msg); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map
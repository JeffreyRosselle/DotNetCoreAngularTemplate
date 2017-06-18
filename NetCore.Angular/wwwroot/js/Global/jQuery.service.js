System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function jQueryFactory() {
        return window['jQuery'];
    }
    exports_1("jQueryFactory", jQueryFactory);
    var core_1, JQ_TOKEN, JQUERY_PROVIDER;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_1("JQ_TOKEN", JQ_TOKEN = new core_1.InjectionToken('jQuery'));
            exports_1("JQUERY_PROVIDER", JQUERY_PROVIDER = [
                { provide: JQ_TOKEN, useFactory: jQueryFactory },
            ]);
        }
    };
});

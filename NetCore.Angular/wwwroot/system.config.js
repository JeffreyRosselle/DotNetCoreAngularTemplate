(function (global) {
    var map = {
        '.': 'js/',
        'rxjs': 'lib/rxjs',
        'traceur': 'lib/traceur/src',
        'app': 'js/',

        '@angular/core': '/lib/angular/core/bundles/core.umd.min.js',
        '@angular/common': '/lib/angular/common/bundles/common.umd.min.js',
        '@angular/compiler': '/lib/angular/compiler/bundles/compiler.umd.min.js',
        '@angular/platform-browser': '/lib/angular/platform-browser/bundles/platform-browser.umd.min.js',
        '@angular/platform-browser-dynamic': '/lib/angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
        '@angular/http': '/lib/angular/http/bundles/http.umd.min.js',
        '@angular/router': '/lib/angular/router/bundles/router.umd.min.js',
        '@angular/forms': '/lib/angular/forms/bundles/forms.umd.min.js'
    };
    var packages = {
        '.': {
            defaultExtension: 'js'
        },
        'app': {
            main: 'main.js',
            defaultExtension: 'js',
            format: 'register'
        },
        'rxjs': { defaultExtension: 'js' },
        'traceur': { main: 'traceur.js', defaultExtension: 'js' }
    };
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);
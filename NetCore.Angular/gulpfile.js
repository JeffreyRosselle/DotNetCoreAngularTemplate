/// <binding BeforeBuild='moveToLibs, sass, typescript' Clean='clean' ProjectOpened='sass:watch, watch:ts' />
var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    dest = require('gulp-dest'),
    sass = require('gulp-sass'),
    merge = require('merge2'),
    del = require('del'),
    tsProject = ts.createProject('tsconfig.json'),
    paths = {
        target: {
            webroot: 'wwwroot',
            js: 'wwwroot/js',
            css: 'wwwroot/css',
            lib: 'wwwroot/lib'
        },
        source: {
            typescript: 'App/**/*.ts',
            packages: [
                '@angular/core/bundles',
                '@angular/compiler/bundles',
                '@angular/common/bundles',
                '@angular/platform-browser/bundles',
                '@angular/forms/bundles',
                '@angular/http/bundles',
                '@angular/router/bundles',
                '@angular/platform-browser-dynamic/bundles',               
                'systemjs',
                'reflect-metadata',
                'rxjs',
                'zone.js'
            ],
            sass: [
                'CSS/home.scss'
            ]
        }
    };

gulp.task('typescript', function () {
    var result = gulp.src(paths.source.typescript)
        .pipe(tsProject());

    return result.js.pipe(gulp.dest(paths.target.js));
});
gulp.task('watch:ts', ['typescript'], function () {
    gulp.watch(paths.source.typescript, ['typescript']);
});

gulp.task('sass', function () {
    return gulp.src(paths.source.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.target.css));
});
gulp.task('sass:watch', function () {
    gulp.watch(paths.source.sass, ['sass']);
});

gulp.task('moveToLibs', function () {
    var merges = [];
    for (var i = 0; i < paths.source.packages.length; i++) {
        var to = paths.source.packages[i].replace('@', '');
        merges.push(gulp.src('node_modules/' + paths.source.packages[i] + '/**/*.js').pipe(gulp.dest(paths.target.lib + '/' + to)));
        merges.push(gulp.src('node_modules/' + paths.source.packages[i] + '/**/*.min.js').pipe(gulp.dest(paths.target.lib + '/' + to)));
    }
    return merge(merges);
});

gulp.task('clean', function () {
    return del([paths.target.lib + '/*', paths.target.js + '/*', paths.target.css + '/*']);
})
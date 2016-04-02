var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var plugins = require('gulp-load-plugins')();
plugins.browserSync = require('browser-sync');

gulp.task('build', function () {
    return browserify({entries: './src/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('all.js'))
        .pipe(gulp.dest('dist'));
});

/**
 * Compress
 * For build the Oda.min.js
 */
gulp.task('compress', function() {
    gulp.src('dist/all.js')
        .pipe(plugins.uglify({mangle: false}))
        .pipe(plugins.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist/'));
    return;
});

gulp.task('dist', ['build','compress'], function () {
});

gulp.task('watch-build', ['build','compress'], function () {
    gulp.watch('src/**/*.jsx', ['build','compress']);
});

gulp.task('browser-sync', function() {
    plugins.browserSync.init({
        proxy: "localhost:80/oda-es6/"
    });
    gulp.watch(["dist/**/*.min.js"], function(){
        plugins.browserSync.reload();
    });
});
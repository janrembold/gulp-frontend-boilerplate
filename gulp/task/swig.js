var gulp        = require('gulp');
var swig        = require('gulp-swig');
var frontMatter = require('gulp-front-matter');
var browserSync = require('browser-sync');
var config      = require('../config');


gulp.task('swig', function() {

    return gulp.src( config.global.src + '/site/*.html' )
        .pipe(frontMatter({ property: 'data' }))
        .pipe(swig( config.swig ))
        .pipe(gulp.dest( config.global.dev ))
        .on('end', browserSync.reload);

});

gulp.task('watch:swig', function() {

    gulp.watch([
        config.global.src + '/site/*.html',
        config.global.src + '/_swig/**/*.html'
    ], ['swig']);

});
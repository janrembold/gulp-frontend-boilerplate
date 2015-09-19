var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var config      = require('../config');


gulp.task('sass', function () {

    return gulp.src( config.global.src + '/resources/sass/**/*.scss' )
        .pipe( sass().on('error', sass.logError) )
        .pipe( gulp.dest( config.global.dev + '/resources/css' ))
        .pipe( browserSync.stream() );

});

gulp.task('sass:watch', function () {

    gulp.watch([
        config.global.src + '/resources/sass/**/*.scss'
    ], ['sass']);

});
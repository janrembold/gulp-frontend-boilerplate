var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var config       = require('../config');


gulp.task('sass', function () {

    return gulp.src( config.global.src + '/resources/sass/**/*.scss' )
        .pipe( sass().on('error', sass.logError) )
        .pipe( autoprefixer( config.autoprefixer ))
        .pipe( gulp.dest( config.global.dev + '/resources/css' ))
        .pipe( browserSync.stream() );

});

gulp.task('watch:sass', function () {

    gulp.watch([
        config.global.src + '/resources/sass/**/*.scss'
    ], ['sass']);

});
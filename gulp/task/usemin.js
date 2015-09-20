var gulp      = require('gulp');
var usemin    = require('gulp-usemin');
var uglify    = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev       = require('gulp-rev');
var config    = require('../config');


gulp.task('copy:bower', function(){

    return gulp.src( config.global.src + '/resources/bower/**/*' )
        .pipe(gulp.dest( config.global.dev + '/resources/bower/') );

});

gulp.task('usemin', ['copy:bower'], function() {

    return gulp.src( config.global.dev + '/*.html')
        .pipe(usemin({
            inlinejs: [ uglify() ],
            inlinecss: [ minifyCss(), 'concat' ],
            css: [ minifyCss(), rev() ],
            js: [ uglify(), rev() ]
        }))
        .pipe(gulp.dest( config.global.dist ));
    
});
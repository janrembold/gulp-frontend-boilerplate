var gulp        = require('gulp');
var config      = require('./config');
var runSequence = require('run-sequence');


// configure default task
gulp.task('default', ['serve']);


// build templates for development
gulp.task('dev', function(callback) {runSequence(

    'clean:dev',
    ['swig', 'sass', 'copy:js'],
    callback

);});

gulp.task('serve', function(callback) {runSequence(

    'dev',
    'browserSync',
    [
        'watch:sass',
        'watch:swig',
        'watch:js'
    ],
    callback

);});


// build templates for production
gulp.task('dist', function(callback) {runSequence(

    'clean:dist',
    'dev',
    'usemin',
    callback

);});
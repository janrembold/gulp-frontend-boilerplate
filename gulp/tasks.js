var gulp        = require('gulp');
var config      = require('./config');
var runSequence = require('run-sequence');


// configure default task
gulp.task('default', ['serve']);


// build templates for development
gulp.task('dev', function(callback) {runSequence(

    ['swig', 'sass'],
    callback

);});

gulp.task('serve', function(callback) {runSequence(

    'dev',
    [
        'connect',
        'sass:watch',
        'swig:watch'
    ],
    callback

);});


// build templates for production
gulp.task('dist', function(callback) {runSequence(

    'dev',
    callback

);});
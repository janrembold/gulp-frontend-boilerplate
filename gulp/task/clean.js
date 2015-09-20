var gulp   = require('gulp');
var del    = require('del');
var config = require('../config');


gulp.task('clean:dev', function () {
    return del([
        config.global.dev + '/**/*'
    ]);
});

gulp.task('clean:dist', function () {
    return del([
        config.global.dist + '/**/*'
    ]);
});
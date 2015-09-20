var gulp   = require('gulp');
var config = require('../config');


gulp.task('copy:js', function(){
    return gulp.src(config.global.src + '/resources/js/**/*')
        .pipe(gulp.dest(config.global.dev + '/resources/js/'));
});

gulp.task('watch:js', function(){

    gulp.watch([
        config.global.src + '/resources/**/*.js'
    ], ['copy:js']);

});
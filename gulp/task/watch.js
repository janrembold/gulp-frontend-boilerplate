var gulp = require('gulp');
var browserSync = require('browser-sync');

//gulp.task('watch', function() {
//    gulp.watch(['./src/site/*.html'], ['copy']);
//});


// browserSync demo
gulp.task('copy', function () {
    gulp.src('./src/site/*.html')
        .pipe(gulp.dest('.tmp'))
        .on("end", browserSync.reload);
});
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('connect', function() {
    browserSync({
        server: "./.tmp"
    });

    gulp.watch(['./src/site/*.html'], ['copy']);
});

//gulp.task('sass', function() {
//    return gulp.src(src.scss)
//        .pipe(sass())
//        .pipe(gulp.dest(src.css))
//        .pipe(reload({stream: true}));
//});
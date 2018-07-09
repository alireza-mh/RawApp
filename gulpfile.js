var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('watch', function() {
    gulp.watch("./src/**", ["runBabel"]);
});

gulp.task("runBabel", function () {
    gulp.src("./src/**/*.js")
        .pipe(babel({
            presets: ["env","stage0"]
        }))
        .pipe(gulp.dest('lib'))
});
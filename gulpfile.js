var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
    gulp.src("./sass/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed",
            includePaths: ["bower_components/bourbon/app/assets/stylesheets/"]
        }))
        .pipe(gulp.dest("./dist"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass"]);
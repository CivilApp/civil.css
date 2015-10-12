var gulp = require("gulp");
var sass = require("gulp-sass");
var nano = require('gulp-cssnano');

gulp.task("sass", function () {
    gulp.src("./sass/**/*.scss")
        .pipe(sass({
            //outputStyle: "compressed",
            includePaths: ["bower_components/bourbon/app/assets/stylesheets/"]
        }))
        .pipe(nano())
        .pipe(gulp.dest("./dist"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass"]);
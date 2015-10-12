var gulp = require("gulp");
var sass = require("gulp-sass");
var nano = require('gulp-cssnano');

gulp.task("sass", function () {
    gulp.src("./sass/**/*.scss")
        .pipe(sass({
            //outputStyle: "compressed",
            includePaths: ["./bower_components/bourbon/app/assets/stylesheets/"]
        }))
        .pipe(nano())
        .pipe(gulp.dest("./dist"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("sass:docs", function () {
    gulp.src("./docs/sass/**/*.scss")
        .pipe(sass({
            //outputStyle: "compressed",
            includePaths: [
                "./bower_components/bourbon/app/assets/stylesheets",
                "./sass"]
        }))
        .pipe(nano())
        .pipe(gulp.dest("./docs/css"));
});

gulp.task("sass:docs:watch", function () {
    gulp.watch("./docs/sass/**/*.scss", ["sass:docs"]);
});

gulp.task("copy:docs", function () {
    gulp.src(["./dist/civil.css", "./dist/syntax.css"])
        .pipe(gulp.dest("./docs/css"));

    gulp.src("dist/civil.js")
        .pipe(gulp.dest("./docs/js"));
});

gulp.task("default", ["build", "docs"]);
gulp.task("build", ["sass"]);
gulp.task("docs", ["copy:docs", "sass:docs"]);
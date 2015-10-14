var gulp = require("gulp");
var sass = require("gulp-sass");
var nano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");

/*
 Build civil.css, and copy to docs
 */
gulp.task("build", function () {
    gulp.src("./sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            //outputStyle: "compressed",
            includePaths: ["./bower_components/bourbon/app/assets/stylesheets/"]
        }))
        .pipe(nano())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist"))
        .pipe(gulp.dest("./docs/css"));
});

gulp.task("build:watch", ["build"], function () {
    gulp.watch("./sass/**/*.scss", ["build"]);
});

/*
 Build docs
 */
gulp.task("build:docs", function () {
    gulp.src("./docs/sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            //outputStyle: "compressed",
            includePaths: [
                "./bower_components/bourbon/app/assets/stylesheets",
                "./sass"]
        }))
        .pipe(nano())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./docs/css"));
});

gulp.task("build:docs:watch", ["build:docs"], function () {
    gulp.watch("./docs/sass/**/*.scss", ["build:docs"]);
});

/*
 Copy civil.css latest build for docs
 */
gulp.task("copy:docs", function () {
    gulp.src(["./dist/civil.css", "./dist/syntax.css"])
        .pipe(gulp.dest("./docs/css"));

    gulp.src("dist/civil.js")
        .pipe(gulp.dest("./docs/js"));
});

/*
 Watch src and docs
 */
gulp.task("dev", function () {
    gulp.watch("./sass/**/*.scss", ["build"]);
    gulp.watch("./docs/sass/**/*.scss", ["build:docs"]);
});

gulp.task("default", ["src", "docs"]);
gulp.task("src", ["build"]);
gulp.task("docs", ["copy:docs", "build:docs"]);
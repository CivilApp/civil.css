var gulp = require("gulp");
var runSequence = require("run-sequence");
var rename = require('gulp-rename');

var sass = require("gulp-sass");
var nano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");

/*
    Build civil.css, and minify
 */
gulp.task("build", function () {
    return gulp.src("./sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            // outputStyle: "compressed",
            includePaths: ["./bower_components/bourbon/app/assets/stylesheets/"]
        }))
        .pipe(nano())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist"));
});

gulp.task("build:watch", ["build"], function () {
    gulp.watch("./sass/**/*.scss", ["build"]);
});

/*
    Build jQuery plugin
 */
gulp.task("build:js", function () {
    return gulp.src("./js/**/*.js")
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest("./dist/"));
});

/*
    Build docs
 */
gulp.task("build:docs", function () {
    return gulp.src("./docs/sass/**/*.scss")
        // .pipe(sourcemaps.init())
        .pipe(sass({
            // outputStyle: "compressed",
            includePaths: [
                "./bower_components/bourbon/app/assets/stylesheets",
                "./sass"
            ]
        }))
        .pipe(nano())
        // .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./docs/css"));
});

gulp.task("build:docs:watch", ["build:docs"], function () {
    gulp.watch("./docs/sass/**/*.scss", ["build:docs"]);
});

/*
    Copy civil.css latest build for docs
 */
gulp.task("prepare:docs", ["copy:css", "copy:js"]);

gulp.task("copy:css", function () {
    return gulp.src("./dist/*.css")
        .pipe(gulp.dest("./docs/css"));
});

gulp.task("copy:js", function () {
    return gulp.src("./dist/*.js")
        .pipe(gulp.dest("./docs/js"));
});

/*
    Watch src and docs
 */
gulp.task("dev", function (callback) {
    gulp.watch("./sass/**/*.scss", function (event) {
        runSequence(
            "build",
            "prepare:docs"
        )
    });
    gulp.watch("./docs/sass/**/*.scss", ["build:docs"]);
});

gulp.task("default", function (callback) {
    runSequence(
        "src",
        ["docs"],
        callback
    );
});

gulp.task("src", ["build", "build:js"]);
gulp.task("docs", ["prepare:docs", "build:docs"]);
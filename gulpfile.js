'use strict';

var gulp = require("gulp");
var del = require("del");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var pump = require('pump');
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csscomb = require("gulp-csscomb");
var csso = require("gulp-csso");
var uglify = require("gulp-uglify");
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var run = require("run-sequence");
var server = require("browser-sync").create();

// gulp.task("html", function () {
//   return gulp.src("source/*.html")
//     .pipe(plumber())
//     .pipe(htmlmin({
//       minifyJS: true,
//       minifyURLs: true,
//       collapseWhitespace: true,
//       removeComments: true,
//       sortAttributes: true,
//       sortClassName: true
//     }))
//     .pipe(gulp.dest("build"))
// });

gulp.task("style", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csscomb())
    .pipe(gulp.dest("source/css"))
    // .pipe(csso())
    // .pipe(rename({suffix: ".min"}))
    // .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

// gulp.task("script-min", function (cb) {
//   pump([
//     gulp.src("source/js/**/*.js"),
//     uglify(),
//     rename({suffix: ".min"}),
//     gulp.dest("build/js")
//   ], cb);
// });

// gulp.task("images", function () {
//   return gulp.src('source/img/**/*.{jpg,png,webp}')
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.jpegtran({progressive: true})
//     ]))
//     .pipe(gulp.dest('build/img'));
// });

// gulp.task("clean", function () {
//   return del("build");
// });

// gulp.task("copy", function () {
//   return gulp.src([
//       "source/fonts/*.{woff,woff2}",
//       "source/js/**/*.js"
//     ], {
//       base: "source"
//     })
//     .pipe(gulp.dest("build"));
// });


gulp.task("serve", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html"/*, ["html"]*/).on("change", server.reload);
});


// gulp.task("build", function (done) {
//   run(
//     "clean",
//     "copy",
//     "images",
//     "html",
//     "style",
//     "script-min",
//     done
//   );
// });
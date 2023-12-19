const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const browserSync = require("browser-sync").create();

// Minify and Concatenate JS
gulp.task("minify-js", function () {
  return gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
});

// Concatenate, Minify, and Generate Sourcemaps for CSS
gulp.task("minify-css", function () {
  const plugins = [autoprefixer(), cssnano()];

  return gulp
    .src(["src/css/style.css", "src/css/responsive.css"])
    .pipe(sourcemaps.init())
    .pipe(concat("style.min.css"))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
});

// Browser Sync
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  // Watch files for changes and reload
  gulp
    .watch(["*.html", "dist/js/*.js", "dist/css/*.css"])
    .on("change", browserSync.reload);
});

// Default task to run all tasks
gulp.task("default", gulp.series("minify-js", "minify-css", "browser-sync"));
gulp.task("build", gulp.series("minify-js", "minify-css"));

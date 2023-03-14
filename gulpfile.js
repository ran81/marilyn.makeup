var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var gulp = require('gulp');


gulp.task('scripts', function () {
  return gulp.src('js/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

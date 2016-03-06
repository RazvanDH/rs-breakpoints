const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gss = require('gulp-shopify-sass');

gulp.task('sandbox', function() {
  gulp.src('sandbox/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('sandbox'));
});


gulp.task('concatenate', function() {
  gulp.src('src/*.scss')
    .pipe(gss())
    .pipe(gulp.dest(''));
});


gulp.task('default', ['sandbox', 'concatenate']);

gulp.task('watch', function(){
  gulp.watch([
    'sandbox/style.scss',
    'src/**/*'
  ], ['sandbox', 'concatenate']);
});

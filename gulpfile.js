const gulp = require('gulp');
const gulpSass = require('gulp-sass');

gulp.task('sandbox', function() {
  gulp.src('sandbox/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('sandbox'));
});

gulp.task('default', ['sandbox']);

gulp.task('watch', function(){
  gulp.watch([
    'sandbox/style.css',
    'src/**/*'
  ], ['sandbox']);
});

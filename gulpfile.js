const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('style', function() {
  gulp.src('style/style.scss')
    .pipe(gulpSass())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('style'));
});

gulp.task('default', ['style']);

gulp.task('watch', function(){
  gulp.watch([
    'style/style.scss'
  ], ['style']);
});

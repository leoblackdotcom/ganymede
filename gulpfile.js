const gulp = require('gulp'),
      stylus = require('gulp-stylus'),
      postcss = require('gulp-postcss'),
      browserSync = require('browser-sync'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify');

var cssDest = './';

gulp.task('stylus', function(){
	return gulp.src('./src/styl/style.styl')
		.pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([
      require('autoprefixer'), 
      require('postcss-combine-media-query'), 
      require('postcss-combine-duplicated-selectors')
    ]))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
});

var jsFiles = 'src/scripts/**/*.js',
    jsDest = 'dist/js/';

gulp.task('js', function() {
  return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "https://leostella-restore.local/careers-news/"
  });
});

gulp.task('watch', function(){
	gulp.watch('src/styl/**/*.styl', gulp.series('stylus'));
  gulp.watch('src/scripts/**/*.js', gulp.series('js'));
  gulp.watch('**/*.php').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('stylus','js','browser-sync','watch'));
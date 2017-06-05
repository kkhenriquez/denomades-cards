var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var minifycss = require('gulp-cssnano');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var neat = require('node-neat');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('js', function() {
	return gulp.src(['./app/js/*.js'], ['!./app/js/concat.js'])
	.pipe(concat('concat.js'))
	.pipe(gulp.dest('./app/js'))
});

gulp.task('sass', function () {
	gulp.src('./app/scss/*.scss')
	.pipe(plumber())
	.pipe(sass({
		includePaths: ['scss'].concat(neat)
	}))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./app/scss/tmp'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('./app/css'))
});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('docs'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('clean:docs', function() {
  return del.sync('docs');
});

gulp.task('modernizr-2', function() {
	return gulp.src('app/js/modernizr-2.6.2.min.js')
	.pipe(gulp.dest('docs/js'))
});

gulp.task('copy-icons', function() {
	return gulp.src('app/*.png')
	.pipe(gulp.dest('docs'))
});

gulp.task('build', function (callback) {
  runSequence('clean:docs',
    ['sass', 'useref', 'modernizr-2', 'copy-icons'],
    callback
  )
});

gulp.task('default', ['js', 'sass', 'browser-sync'], function () {
	gulp.watch(['./app/css/*.css'], ['reload'])
	gulp.watch(['./app/scss/*.scss', 'scss/**/*.scss'], ['sass'])
	gulp.watch(['./app/js/*'], ['js'], ['reload'])
	gulp.watch(['./app/*.html'], ['reload']);
});

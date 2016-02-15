// gulpfile.js

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browsersync = require('browser-sync');
var watch = require('gulp-watch');
var config = require('./gulpconfig');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var util = require('gutil');
var concat = require('gulp-concat');

gulp.task('default', ['js', 'css', 'watch-sass', 'watch-js']);

gulp.task('js', function () {
  browserify({
    entries: 'index.js.jsx',
    extensions: ['.jsx', '.js'],
    debug: true
  })
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
  .pipe(browsersync.reload({stream:true}));
});


gulp.task('css', function () {
  sass_config = config.sass;

  return gulp.src(sass_config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(sass_config.settings))
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(sourcemaps.write())
    .pipe(concat('application.css'))
    .pipe(gulp.dest(sass_config.dest))
    .pipe(browsersync.reload({stream:true}));
});

gulp.task('watch-sass', ['browsersync'], function(callback) {
  watch("./stylesheets/**/*.{sass,scss}", function() { gulp.start('css'); });
});

gulp.task('watch-js', ['browsersync'], function(callback) {
  watch("./js/**", function() { gulp.start('js'); });
});

gulp.task("browsersync", function() {
  browsersync.init({
    server: {
      baseDir: './'
    }
  });
});

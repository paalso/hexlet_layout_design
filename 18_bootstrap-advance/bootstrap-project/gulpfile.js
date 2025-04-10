const { src, dest, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browsersync = () => {
  browserSync.init({
    server: { baseDir: 'build/' },
    notify: false,
    online: true
  });

  watch('./app/**/*.js', scripts);
  watch('./app/**/*.scss', sass2css);
  watch('./app/**/*.pug', pug2html);
};

const scripts = () => {
  return src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js.map',
  ])
    .pipe(dest('./build/js/'))
    .pipe(browserSync.stream())
};

const sass2css = () => {
  return src([
    './app/scss/main.scss'
  ])
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(dest('./build/styles/'))
    .pipe(browserSync.stream())
};

const pug2html = () => {
  return src([
    './app/index.pug',
  ])
    .pipe(pug({ pretty: true }))
    .pipe(dest('./build/'))
    .pipe(browserSync.stream())
};

exports.build = parallel(scripts, sass2css, pug2html);
exports.default = browsersync;
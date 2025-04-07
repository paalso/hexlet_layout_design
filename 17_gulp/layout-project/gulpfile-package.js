const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const del = require('del');

// Пути
const paths = {
  sass: {
    src: 'src/**/*.scss',
    dest: 'build/styles'
  },
  pug: {
    src: 'src/pages/*.pug',
    dest: 'build/'
  },
  watch: {
    sass: 'src/**/*.scss',
    pug: 'src/**/*.pug'
  },
  clean: 'build/'
};

// Очистка директории build
const clean = () => del(paths.clean);

// Компиляция SASS
const buildSass = () => {
  console.log('Компиляция SASS');
  return src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(paths.sass.dest))
    .pipe(browserSync.stream());
};

// Компиляция Pug
const buildPug = () => {
  console.log('Компиляция Pug');
  return src(paths.pug.src)
    .pipe(pug({ pretty: true }))
    .pipe(dest(paths.pug.dest))
    .pipe(browserSync.stream());
};

// Локальный сервер и слежение за файлами
const browserSyncJob = () => {
  browserSync.init({
    server: paths.pug.dest
  });

  watch(paths.watch.sass, buildSass);
  watch(paths.watch.pug, buildPug);
};

// Экспорты задач
exports.clean = clean;
exports.buildSass = buildSass;
exports.buildPug = buildPug;
exports.server = browserSyncJob;
exports.build = series(clean, parallel(buildSass, buildPug));
exports.development = series(exports.build, browserSyncJob);
exports.default = exports.development;

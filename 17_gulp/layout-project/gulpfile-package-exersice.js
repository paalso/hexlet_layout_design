// Gulp: Сторонние пакеты
// https://ru.hexlet.io/courses/gulp/lessons/package/exercise_unit
// https://ru.hexlet.io/code_reviews/1770141



const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

// Компиляция SASS
const build = () => {
  console.log('Компиляция SASS');

  return src('project/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('app.css'))
    .pipe(dest('server/www/styles/'));
};


exports.build = build;
exports.default = exports.build;
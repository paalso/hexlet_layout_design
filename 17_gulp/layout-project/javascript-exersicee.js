// Gulp: JavaScript 
// https://ru.hexlet.io/courses/gulp/lessons/gulp-command/exercise_unit
// https://ru.hexlet.io/code_reviews/1762330

const { src, dest } = require('gulp');

const copyCSS = () => {
  return src(['project/**/*.css', '!project/**/old/**/*'])
    .pipe(dest('server/'));
};

exports.copyCSS = copyCSS;
exports.default = copyCSS;

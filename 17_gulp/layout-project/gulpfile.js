// Gulp: Watch
// https://ru.hexlet.io/courses/gulp/lessons/watch/exercise_unit
//


const { dest, src, series, watch } = require('gulp');

const copyCSS = () => {
  return src('project/**/*.css')
    .pipe(dest('server/dist/'));
};

const watchers = () => {
  watch('project/**/*.css', copyCSS);
};

exports.copyCSS = copyCSS;
exports.watchers = watchers;
exports.default = series(copyCSS, watchers);

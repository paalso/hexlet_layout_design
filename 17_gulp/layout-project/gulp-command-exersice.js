const { src, dest } = require('gulp');

const copyCSS = () => {
  return src('project/**/*.css')
    .pipe(dest('build/styles'));
};


exports.copyFile = copyFile;

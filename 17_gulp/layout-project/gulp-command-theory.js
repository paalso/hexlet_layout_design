const { parallel, src, dest } = require('gulp');
// const { series } = require('gulp');


const myFirstGulpTask = (done) => {
  console.log('My First Gulp Task Completed');
  done();
}

const mySecondGulpTask = (done) => {
  console.log('My Second Gulp Task Completed');
  
  done();
}

const copyFile = () => {
  return src('src/sass/**/*.scss')
    .pipe(dest('build/styles'));
};


exports.default = parallel(myFirstGulpTask, mySecondGulpTask);
// exports.default = series(myFirstGulpTask, mySecondGulpTask);
exports.myFirstGulpTask = myFirstGulpTask;
exports.mySecondGulpTask = mySecondGulpTask;
exports.copyFile = copyFile;


const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
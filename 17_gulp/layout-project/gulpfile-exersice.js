// Gulp: Gulpfile 
// https://ru.hexlet.io/courses/gulp/lessons/gulpfile/exercise_unit
// https://ru.hexlet.io/code_reviews/1758094

const { parallel } = require('gulp');


const myFirstGulpTask = (done) => {
  console.log('My First Gulp Task Completed');
  done();
}

const mySecondGulpTask = (done) => {
  console.log('My Second Gulp Task Completed');
  
  done();
}

exports.default = parallel(myFirstGulpTask, mySecondGulpTask);
exports.myFirstGulpTask = myFirstGulpTask;
exports.mySecondGulpTask = mySecondGulpTask;


const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
const { watch } = require('gulp');

const checkFileStructure = (done) => {
  console.log('Изменилась структура файлов');

  done();
};

const checkAddFile = (done) => {
  console.log('Файл был добавлен');

  done();
};

const checkRemoveFile = (done) => {
  console.log('Файл был удален');

  done();
};

const watchers = () => {
  watch('src/sass/app.scss', (done) => {
    console.log('Ой, файл app.scss изменился');

    done();
  });

  watch('.', (done) => {
    console.log('Ой,текущая директория изменилась!');

    done();
  });

  watch('src/sass/', { events: ['add', 'unlink'] }, checkFileStructure);
  watch('src/sass/', { events: ['add'] }, checkAddFile);
  watch('src/sass/', { events: ['unlink'] }, checkRemoveFile);
};

exports.watchers = watchers;

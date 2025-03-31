#!/bin/bash

# Создаём корневую директорию проекта
mkdir -p project/dist/{pages,styles,old/{pages,styles,layout/component},layout/component}

# Создаём файлы
touch project/dist/pages/logo.pug
touch project/dist/styles/{app.css,app.scss}
touch project/dist/old/pages/logo.pug
touch project/dist/old/styles/app_old.css
touch project/dist/old/layout/component/logo.js
touch project/dist/layout/component/{logo.js,logo.css}

echo "Структура проекта успешно создана!"

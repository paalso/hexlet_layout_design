#!/bin/bash

# Создаем папки
mkdir -p build/styles
mkdir -p src/sass
mkdir -p src/pages/sections

# Создаем файлы
touch build/styles/app.scss
touch src/sass/app.scss
touch src/pages/index.pug
touch src/pages/sections/head.pug
touch src/pages/sections/footer.pug

echo "Структура проекта успешно создана!"

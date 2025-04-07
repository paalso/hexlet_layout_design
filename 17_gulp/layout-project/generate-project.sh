#!/bin/bash
# generate-project.sh

# Создание директорий
mkdir -p src/pages
mkdir -p src/pages/sections
mkdir -p src/sass/include

# Создание базового pug-шаблона
cat > src/pages/index.pug <<'EOF'
doctype html
html
  head
    include sections/head.pug
  body
    h1 Hello from Pug!
    include sections/footer.pug
EOF

# Секция head.pug
cat > src/pages/sections/head.pug <<'EOF'
meta(charset="UTF-8")
meta(name="viewport", content="width=device-width, initial-scale=1.0")
title Мини-проект
link(rel="stylesheet", href="../main.css")
EOF

# Секция footer.pug
cat > src/pages/sections/footer.pug <<'EOF'
footer
  p © 2025 Мини-проект
EOF

# Основной SCSS-файл
cat > src/sass/main.scss <<'EOF'
@import 'include/header';
@import 'include/footer';

body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #333;
}
EOF

# header.scss
cat > src/sass/include/header.scss <<'EOF'
header {
  background: #333;
  color: #fff;
  padding: 10px;
}
EOF

# footer.scss
cat > src/sass/include/footer.scss <<'EOF'
footer {
  background: #222;
  color: #ccc;
  text-align: center;
  padding: 20px;
}
EOF

echo "✅ Мини-проект создан!"

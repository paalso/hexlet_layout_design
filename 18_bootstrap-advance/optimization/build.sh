#!/bin/bash

# Set script to fail on any error
set -e

# Set paths
SRC_DIR="app"
BUILD_DIR="build"
SCSS_DIR="$SRC_DIR/scss"
JS_DIR="$SRC_DIR/js"
CSS_OUTPUT="$BUILD_DIR/styles"
JS_OUTPUT="$BUILD_DIR/js"
PUG_DIR="$SRC_DIR/views"
HTML_OUTPUT="$BUILD_DIR"

# Compile SCSS to CSS
build_scss() {
  echo "🔧 Compiling SCSS..."
  mkdir -p "$CSS_OUTPUT"
  sass "$SCSS_DIR/main.scss" "$CSS_OUTPUT/main.css"
}

# Compile Pug to HTML
build_pug() {
  echo "🧱 Compiling Pug to HTML..."
  mkdir -p "$HTML_OUTPUT"
  npx pug "$PUG_DIR/index.pug" --pretty --out "$HTML_OUTPUT"
}

# Copy JS files
copy_js() {
  echo "📦 Copying JavaScript files..."
  mkdir -p "$JS_OUTPUT"
  cp "$JS_DIR"/*.js "$JS_OUTPUT/"
}

# Clean build directory
clean_build() {
  echo "🧹 Cleaning previous build..."
  rm -rf "$BUILD_DIR"
}

# Build all
build_all() {
  clean_build
  build_scss
  copy_js
  build_pug
  echo "✅ Build completed. Output in '$BUILD_DIR/'"
}

# Run the build
build_all

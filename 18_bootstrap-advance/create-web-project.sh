#!/bin/bash

# Show help message
show_help() {
  echo "Usage: $0 [project-name]"
  echo ""
  echo "Creates a simple web project structure with SCSS, JS, and Pug."
  echo ""
  echo "Arguments:"
  echo "  project-name   Optional. Name of the project directory (default: simple-web-project)"
  echo ""
  echo "Example:"
  echo "  $0 my-landing-page"
  exit 0
}

# Check for help flag
if [[ "$1" == "-h" || "$1" == "--help" ]]; then
  show_help
fi

# Default project name if none provided
PROJECT_NAME=${1:-simple-web-project}

# Define directory structure
create_directories() {
  echo "📁 Creating directory structure..."
  mkdir -p "$PROJECT_NAME"/{app/{js,scss/{component,utilities},views},build}
}

# Create starter JavaScript file
create_js_file() {
  echo "📝 Creating JavaScript entry file..."
  echo "// Example JavaScript file" > "$PROJECT_NAME/app/js/hello.js"
}

# Create main SCSS files
create_scss_files() {
  echo "🎨 Creating SCSS files..."

  # main.scss
  cat <<EOF > "$PROJECT_NAME/app/scss/main.scss"
// Main SCSS file
@import 'variables';
// Add component and utility imports here
EOF

  # variables.scss
  echo "// Custom SCSS variables go here" > "$PROJECT_NAME/app/scss/variables.scss"
}

# Create base Pug file
create_pug_files() {
  echo "📄 Creating Pug files..."

  cat <<EOF > "$PROJECT_NAME/app/views/index.pug"
//- Main index page
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    title Simple Web Project
    link(rel="stylesheet", href="/styles/main.css")
  body
    h1 Hello from index.pug
    script(src="/js/hello.js")
EOF
}

# Create basic Makefile
create_makefile() {
  echo "🛠️ Creating Makefile..."
  cat <<'EOF' > "$PROJECT_NAME/Makefile"
gulp:
	npx gulp
EOF
}

# Run all setup functions
main() {
  echo "🚀 Initializing project: $PROJECT_NAME"
  create_directories
  create_js_file
  create_scss_files
  create_pug_files
  create_makefile
  echo "✅ Project structure for '$PROJECT_NAME' created successfully."
}

main

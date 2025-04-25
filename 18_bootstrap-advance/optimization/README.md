### Typical Project Structure

```
app/
├── js/
│   └── theme_switch.js         # JavaScript file for theme switching
├── scss/
│   ├── main.scss               # Main file where all styles are compiled
│   ├── variables.scss          # Custom variables (before importing Bootstrap)
│   ├── dark-theme.scss         # Variables for the dark theme
│   ├── component/
│   │   ├── citation.scss       # Styling for the citation component
│   │   └── comment.scss        # Styling for the comment component
│   └── utilities/
│       └── custom-utilities.scss # Custom utilities
├── views/                      # Folder for Pug files (HTML templates)
│   ├── index.pug               # Main template for the page
│   ├── layout.pug              # Template for the overall HTML structure (head, body, etc.)
│   └── includes/
│       ├── header.pug          # Header template
│       ├── footer.pug          # Footer template
│       └── mixins.pug          # Pug mixins for reusable template snippets
build/                          # Folder where Gulp outputs the final result
├── index.html                  # Compiled HTML file
├── js/                         # Folder for compiled JavaScript
├── styles/                     # Folder for compiled CSS
node_modules/                   # Node.js dependencies
gulpfile.js                     # Gulp task automation file
Makefile                        # Makefile for project build tasks
package.json                    # NPM package file with dependencies
```

#### Example SCSS File Contents:

##### variables.scss
```
$primary-color: #a8d8ea;
$secondary-color: #aa96da;
$font-family: "Arial", sans-serif;
```

##### citation.scss
```
.citation {
    font-style: italic;
    color: $primary-color;
}

```

##### custom-utilities.scss
```
.comment {
    padding: 10px;
    background-color: $secondary-color;
    border-radius: 5px;
}

```

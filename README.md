## Welcome to Law's Results

Providing easily accesible results and analytics for Double Draw Results

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

<script src="tabletop.js"></script>

<script type="text/javascript">
-      window.onload = function() { init() };
-    
+    <script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
+    <script type='text/javascript'>    
       var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Y5mGn_Gd05M6x1WN9l-1UchrBWQEJNmZoS7LDuFI8Jg/edit?usp=sharing';
 
       function init() {
         Tabletop.init( { key: publicSpreadsheetUrl,
                          callback: showInfo,
                          simpleSheet: true } )
       }
 
       function showInfo(data, tabletop) {
-        alert("Successfully processed!")
+        alert('Successfully processed!')
         console.log(data);
       }
+
+      window.addEventListener('DOMContentLoaded', init)
     </script>
       
### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/LawResults/LawResults.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

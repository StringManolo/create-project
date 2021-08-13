# Generate Templates From The CLI

### Description
Easy way to create project folder structures and default files for fast development.


### Install
```
yes | rm "./create-project" "$PREFIX/include/create-project-templates" "$PREFIX/bin/create-project" -r 2>&1 > /dev/null ; git clone https://github.com/StringManolo/create-project && chmod +775 create-project/export/create-project && mv create-project/export/create-project "$PREFIX/bin" && mv create-project/export/create-project-templates "$PREFIX/include/" && yes | rm create-project -r
```

### Usage
+ List available templates  
```
create-project list
```

+ Generate template
```
create-project basic-web
```

+ Create your custom template from an existing folder
```
create-project create ./myFolder
```

+ Remove a template
```
create-project remove myFolder
```

### Included Templates
Available Templates:  
| Name | Description |
| --- | --- |
| basic-jsx | Use JSX in your javascript projects. Also allows CSS-IN-JS |
| basic-three | Three.js basic animation. Include three.js v69, index.html, main.js and index.css |
| basic-web | index.html, main.js and index.css files |
| express | Require, get and bind express.js file |
| index.css | Basic body styles like remove margin, and some properties as example | 
| index.html | Basic html file with data:favicon, root element, and link to css and js files |
| main.c | Include stdio, int main(args) and return 0 |
| main.cpp | Include iostream, using namespace std, int main(args), cin.get and return 0 |
| main.go | Package main, import fmt and func main |
| main.js | Some predefined functions to code faster |
| main.rs | fn main and print a message |
| normalize.css | Corrects bugs and common browser inconsistencies and normalizes styles for a wide range of elements |


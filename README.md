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

# Generate Templates From The CLI

### Install
```
yes | rm "$PREFIX/include/create-project-templates" "$PREFIX/bin/create-project" -r 2>&1 > /dev/null ; git clone https://github.com/StringManolo/create-project && chmod +775 create-project/export/create-project && mv create-project/export/create-project "$PREFIX/bin" && mv create-project/export/create-project-templates "$PREFIX/include/" && yes | rm create-project -r
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


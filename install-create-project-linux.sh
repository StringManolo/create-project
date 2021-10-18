echo '
# <create-project-fix>

# THIS IS A FIX TO INSTALL https://github.com/stringmanolo/create-project on Linux distributions. Design was originally made for Termux.

createProjectAddPath() {
  if [ -d "$1" ] && [[ ":$PATH:" != *":$1:"* ]]; then
    PATH="${PATH:+"$PATH:"}$1";
  fi
}

PREFIX="$HOME/data/data/com.termux/files/usr";

export PREFIX="$PREFIX";

createProjectAddPath "$PREFIX/bin/";


# </create-project-fix>
' >> "$HOME/.bashrc"


PREFIX="$HOME/data/data/com.termux/files/usr" && yes | rm "./create-project" "$PREFIX/include/create-project-templates" "$PREFIX/bin/create-project" -r 2>&1 > /dev/null;
git clone https://github.com/StringManolo/create-project;
chmod +775 create-project/export/create-project/;
mkdir -p "$PREFIX/bin";
mv create-project/export/create-project "$PREFIX/bin/";
mv create-project/export/create-project-templates "$PREFIX/include/";
yes | rm create-project -r;

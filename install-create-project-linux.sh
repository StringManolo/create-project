echo '
# THIS IS A FIX TO INSTALL https://github.com/stringmanolo/create-project on Linux distributions. Design was originally made for Termux.

addPath() {
  if [ -d "$1" ] && [[ ":$PATH:" != *":$1:"* ]]; then
    PATH="${PATH:+"$PATH:"}$1";
  fi
}

PREFIX="$HOME/data/data/com.termux/files/usr" && yes | rm "./create-project" "$PREFIX/include/create-project-templates" "$PREFIX/bin/create-project" -r 2>&1 > /dev/null ; git clone https://github.com/StringManolo/create-project && chmod +775 create-project/export/create-project && mkdir -p "$PREFIX/bin" && mv create-project/export/create-project "$PREFIX/bin/" && mv create-project/export/create-project-templates "$PREFIX/include/" && yes | rm create-project -r;

export PREFIX="$PREFIX";

addPath "$PREFIX/bin/";
' >> "$HOME/.bashrc" && source "$HOME/.bashrc";

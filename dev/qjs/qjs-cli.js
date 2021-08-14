import * as std from "std";
import * as os from "os";

const run = command => {
  const process = std.popen(command, "r");
  let output = "",
  line = "";

  while(( line = process.getline() ) != null) {
    output += line + "\n";
  }
  return output.substring(0, output.length-1);
}

const ask = (text, simbol) => {
  std.out.puts(`${text}${simbol}`);
  return std.in.getline();
}

const exit = message => {
  console.log(message);
  std.exit(0);
}

const cli = {
  color: {
    red: "\x1b[31m",
    reset: "\x1b[0m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    green: "\x1b[32m"
  }
};

for (const i in scriptArgs) {
  const argumentValue = scriptArgs[+i + 1];
  switch(scriptArgs[i]) {
    case "-a":
    case "--asdfg":
      cli.asdfg = argumentValue;
    break;

    case "-h":
    case "--help":
      exit(`

usage: qjs cli.js [options]
  -a  --asdfg           Bla bla bla
  -h  --help            Print this message

Examples:
qjs tgbot -a hello

`);


  }
}


if (!cli.asdfg) {
  exit(`${cli.color.red}--asdfg is mandatory.${cli.color.reset}`);
}

console.log(`Your argument is ${cli.color.green}${cli.asdfg}${cli.color.reset} This just an example of how to use arguments easily in Quickjs.`);


if (/y/gi.test(ask("Do you want to view your public IP address?", " [y/n] -> "))) {
  console.log(`Your public ip address is ${cli.color.green}${run("curl http://ifconfig.me/ip --silent")}${cli.color.reset}.`);
}



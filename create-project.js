const fs = require("fs");
const child_process  = require("child_process");

const readdir = async path => {
  return new Promise( (resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}


const get7zFiles = files => files.filter(file => file.substr(file.length-3, file.length-1) === ".7z");

const loadFile = async filename => {
  return new Promise( (resolve, reject) => {
    filename = fs.readFile(filename, "utf-8", (err, file) => {
      if (err) {
        reject(err);
      } else {
        resolve(file);
      }
    });
  });
};


const getDescription = async path => {
  return new Promise( async (resolve, reject) => {
    const file = await loadFile(path);
    resolve(file);
  });
}

const extractFiles = async filename => {
  return new Promise( (resolve, reject) => {
    child_process.exec(`7z x "./create-project-templates/${filename}.7z" -o"./"`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

const getSelectedOptions = () => {
  const selected = {};
  const args = process.argv;
  for (let i in args) {
    const actual = args[i];
    const next = args[+i + 1];
    switch(actual) {
      case "l":
      case "-l":
      case "list":
      case "--list":
	selected.list = true;
      break;

      default:
        selected.templates = args;
    }
  }
  return selected;
}



(async () => {
  console.log(); // line break before any output
  const options = getSelectedOptions();
  if (options.list) {
    const path = "./create-project-templates";
    const files = get7zFiles(await readdir(path));
    console.log("Available Templates:");
    for (let i in files) {
      const filename = files[i].substr(0, files[i].length - 3);
      const description = await getDescription(`${path}/${filename}.description`);
      console.log(`  ${filename} - ${description}`);
    }
  } else if (options.templates) {
    options.templates.shift();
    options.templates.shift();
    const path = "./create-project-templates";
    const files = get7zFiles(await readdir(path));
    for (let i in options.templates) {
      for (let j in files) {
        const filename = files[i].substr(0, files[i].length - 3);
	if (options.templates[i] === filename) {
          const res = await extractFiles(filename);
	  console.log(res);
          console.log("Project Created");
	}
      }
    }
  }


})();


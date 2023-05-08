const fs = require("fs");
var path = require("path");

// fs.readFile('./')

// (путь, параметры, обратный вызов)
fs.readdir(
  "./03-files-in-folder/secret-folder",
  { withFileTypes: true },
  (error, dirEntryList) => {
    if (!error) {
      dirEntryList.forEach((file) => {
        fs.stat(
          `./03-files-in-folder/secret-folder/${file.name}`,
          "utf-8",
          (error, stats) => {
            if (!error) {
                const extname = path.extname(file.name);
                const base = path.basename(file.name, extname);

              console.log(
                `${base} - ${extname.slice(1)} - ${stats.size}`
              );
            } else {
              console.error(error);
            }
          }
        );
      });
    } else {
      console.error(error);
    }
  }
);

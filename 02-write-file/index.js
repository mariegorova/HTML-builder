const fs = require("fs");
const readline = require("readline");

fs.open("./02-write-file/text.txt", "w", (err) => {
  if (err) throw err;
});

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt(`Write text:\n`);
rl.prompt();
rl.on("line", (text) => {
  fs.appendFile("./02-write-file/text.txt", `${text}\n`, (err) => {
    if (err) throw err;
  });
});

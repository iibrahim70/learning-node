const fs = require("fs");

// reading a file text
const readText = fs.readFileSync("./text/read.txt", "utf-8");

// writing a text
const writeText = fs.writeFileSync(
  "./text/write.txt",
  readText + "this is written text"
);

console.log(readText, writeText);

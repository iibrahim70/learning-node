const fs = require("fs");

// reading text asynchronoulsy
fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error Reading Text");
  }
  console.log(data);

  // writing text asynchronoulsy
  fs.writeFile("./text/write.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error Writing Text");
    }
  });
});

console.log("Testing asynchronous");

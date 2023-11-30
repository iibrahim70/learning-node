// local module

const { add1, add2 } = require("./local1");

console.log(add1(2, 3));
console.log(add2(2, 7, 5));

// built in module
const path = require("path");
console.log(path);

//const { isUtf8 } = require("buffer");
const fs = require("fs");
const text = fs.readFileSync("my.txt", "utf-8");
text = text.replace("hello", "raghav");
console.log("the content of the file is --->");
console.log(text);
fs.writeFileSync("my.txt", text);

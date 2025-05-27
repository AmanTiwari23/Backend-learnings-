const fs = require("fs");

const a = 100;

setImmediate(()=> console.log("setImmediate"));

fs.readFile("./file.txt","utf8", () => {
    console.log("file Reading CB")
});

setTimeout(()=> console.log("timer expired"));

function printA() {
    console.log("a=", a);
}

printA();

console.log("last line of the file.");
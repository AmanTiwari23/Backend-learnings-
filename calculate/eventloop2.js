const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setimmediate"));

Promise.resolve(()=> console.log("promise"));

fs.readFile('./file.txt', "utf8", ()=>{
    console.log("file Reading CB");
});

setTimeout(() => console.log("timer expired"), 0);

process.nextTick(()=> console.log("process.nexttick"));

function printA() {
    console.log("a= ",a);
}

printA();

console.log("last line of the code");
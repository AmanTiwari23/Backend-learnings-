const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0);
  process.nextTick(() => console.log("2nd next tick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("file Reading CB");
});


process.nextTick(() => console.log("process.nexttick"));

console.log("last line of the code");

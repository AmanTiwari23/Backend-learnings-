const crypto = require("node:crypto");

console.log("hellow world");

var a= 1033878;
var b = 208987;

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512"); 
console.log("first key is genersted");

crypto.pbkdf2("password", "salt",500000,50,"sha512", (err,key) => {
    console.log("key is generated");
});

function multiply(x,y){
    const result = a*b;
    return result;
}

var c = multiply(a,b);

console.log("multiplication result is : ", c);
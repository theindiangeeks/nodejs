const {readFileSync , writeFileSync} = require("fs");

const a = readFileSync("text.txt" , "utf-8");
console.log(a);

writeFileSync("second.txt" , a);
writeFileSync("third.txt" , ` sahil singh ${(123*43434)}` , );

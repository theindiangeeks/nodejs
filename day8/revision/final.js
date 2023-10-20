const _  = require('http');
const quote = require("./randomquote");
console.log("PLEASE");
const server = _.createServer((req,res)=>{
    res.write("SAHIL");
    res.end()
}
);
server.listen(2333);
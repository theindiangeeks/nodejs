const u = require('http');
var sahil = u.createServer((req,res)=>{
    res.write(require("./index.js"))
    res.end();
})
sahil.listen(4343);
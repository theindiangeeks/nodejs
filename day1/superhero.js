const s = require("superheroes");
const h = require('http');
let list = ""
for ( var i = 1; i < 100 ; i++){
   list += s.random() + " \n "
}
console.log(s.all.toString());

let server = h.createServer((req,res)=>{
    res.write(s.random()  + "\n");
    res.write(s.random()+ "\n");
    res.write(s.random() + "\n");
    res.write(s.random() + "\n");
    res.end();
})

server.listen(1234 , ()=>{
    console.log("started")
})
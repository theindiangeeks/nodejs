/* This is the HTTP Module Session */
/* Todays Date = 18th October */ 

const http = require("http");
const server = http.createServer((req , res) => {
    if (req.url == "/" ) {
        res.end("Welcome to the home page ");

    }
    else if(req.url == "/about"){
        res.end("Welcome to the about page");
        
    }else{
        res.end("OPPS: ;( ");
    }
    



}




);
server.listen(5000);
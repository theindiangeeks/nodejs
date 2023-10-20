const http = require("http");
const server = http.createServer((req , res)=>{
    if (req.url === "/home"){
        res.end("HEY Welcome to the home page");
    }
    else if(req.url === "/about" ){
        res.end("Hey welcome to the about page");
    }
    else if(req.url === "/lol" || req.url === "/LOL"){
        res.end("You are LOL");
    }
    else if (req.url === "/Nitansha"){
        res.end(" I wish i didn't do that to you ");
    }
    else {
        res.end("OPPS");
    }

});
server.listen(1222);
const _ = require("http");
const s = _.createServer(
    (req , res)=>{
        if(req.url === "/home"){
            res.write(` <body> <h1 style="color:red;"> sahil singh </h1></body>`);
            res.end();
        }
        else if(req.url === "/about"){
            res.end("SAHIL SINGH DID LOT OF SACRAFICES IN HIS LIFE");

        }
        else {
            res.end("SAHIL SINGH DID LOT OF BAD THINGS IN HIS LIFE");
        }
    }





)
s.listen(1234);
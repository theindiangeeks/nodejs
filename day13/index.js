//This is 27 October :
const _ = require("http");
const server = _.createServer((req,res) =>{
    if (req.url === "/"){
        setInterval(()=>{console.log("I M BEST")} , 1000);
        for(let i = 1 ; i < 1000 ; i++){
            for(let j = 1 ; j < 1000 ; j++){
                console.log(`${i, j}`)
            }
        }
        res.end("HOME");
    }else if ( req.url === "/about"){
        res.end("ABOUT ");
    }
    else {
        res.end("FUCK YOU ");
    }
})
server.listen(2444 , ()=>{
    console.log("LISTEN ON 2444")
}
)
//NOW HERE THIS IS GOING TO BLOCK THE CODE
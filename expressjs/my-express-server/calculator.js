//This is the calculator
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/" , (req,res)=>{
    res.sendFile(__dirname + "/index.html");
    
})
app.post("/" ,(req,res)=>{
    // res.send("THANKS FOR POSTING");
    // console.log(Number(req.body.obj1) + Number(req.body.obj2));
    // var uttar = (Number(req.body.obj1) + Number(req.body.obj2));
    // console.log(uttar)
    // console.log(req.body);
    if(req.body.method == "add"){
        var uttar = Number(req.body.obj1)+ Number(req.body.obj2);

    }else if(req.body.method == "sub"){
        var uttar =  Number(req.body.obj1) - Number(req.body.obj2);
    }
    else if(req.body.method == "multiply"){
        var uttar = Number(req.body.obj1) * Number(req.body.obj2);
    }
    else if( req.body.method == "division"){
        var uttar = Number(req.body.obj1) / Number(req.body.obj2);
    }
    
    res.send(`The result of the calculation is ${ uttar}`);
})
app.listen(1111);
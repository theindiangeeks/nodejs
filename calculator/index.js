const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.listen(1234);
app.use(bodyParser.urlencoded({extended:true}));
app.get("/" , (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post('/',(req,res)=>{
    
    console.log(req.body.method);
    //we ll handle the request
    if(req.body.method=="add"){
        var answer = Number(req.body.obj1) + Number(req.body.obj2);
    }else if(req.body.method =="sub"){
        var answer = Number(req.body.obj1)-Number(req.body.obj2);
    }
    else if(req.body.method =="multiply"){
        var answer = Number(req.body.obj1) * Number(req.body.obj2);
    }
    else if(req.body.method == "division"){
        var answer = Number(req.body.obj1)/Number(req.body.obj2);
    }
    console.log(answer);
    res.send(`Hey your answer is ${ answer}`);
})
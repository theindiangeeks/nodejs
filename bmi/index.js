//bmi formula is kg/height^2
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.listen(1235);
app.get("/" , (req,res)=>{
    res.sendFile(__dirname +"/index.html");
})
app.post("/",(req,res)=>{
 
    console.log(req.body);
    var answer = Number(req.body.obj2)/(Number(req.body.obj1)*Number(req.body.obj1));
    console.log(answer);
    res.send(`OK YOUR ANSWER IS ${answer}`);

});


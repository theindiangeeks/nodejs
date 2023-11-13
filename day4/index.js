const express = require("express");
const bodyParser  = require("body-parser");
const https = require("https");
const app = express();
app.listen(4321 , ()=>{
    console.log("running");
})
app.use(bodyParser.urlencoded({extended:true}))
app.get("/" , (req , res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.post("/" , (req , res)=>{
    res.send("received the request");
    //9yUJ+CkUFiC82GaWsijA5g==vruSHAxfbIBClHUA
    var object1 = {
        hostname : "api.api-ninjas.com",
        method : "GET",
        path : "/v1/passwordgenerator?length=8",
        headers:{
            'X-Api-Key': '9yUJ+CkUFiC82GaWsijA5g==vruSHAxfbIBClHUA'

        }}
        https.get(object1 , (response)=>{
            response.on("data" , (data)=>{
                newPass = (JSON.parse(data));
                console.log(newPass.random_password);
        })
    })
})
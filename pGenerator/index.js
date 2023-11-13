const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.listen(1234 , ()=>{
    console.log("SERVER IS RUNNING")
}
)
app.get("/" , (req,res)=>{
    res.sendFile( __dirname + "/index.html")

})
app.post("/" , (req,res)=>{
    res.send("RECEIVED");
    var object1 = {
        method : "GET",
        hostname:"api.api-ninjas.com",
        path:"/v1/passwordgenerator?length=8",
        headers : {
            'X-Api-Key': "9yUJ+CkUFiC82GaWsijA5g==vruSHAxfbIBClHUA"
        }

    }
    https.get(object1 , (response)=>{
        response.on("data" , (data)=>{
            console.log(JSON.parse(data));
        })


    })
})

//api key 9yUJ+CkUFiC82GaWsijA5g==vruSHAxfbIBClHUA

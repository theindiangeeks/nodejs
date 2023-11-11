const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { log } = require("console");

const app = express();
app.listen(4321);
app.use(bodyParser.urlencoded({extended:true}));

app.post("/" , (Preq,Pres)=>{
    var UserWants = (Preq.body.quoteType);
    // console.log(UserWants)

var options = {
    hostname:"api.api-ninjas.com",
    method:"GET",
    path :`/v1/quotes?category=${UserWants}`,
    headers:{
        'X-Api-Key':'9yUJ+CkUFiC82GaWsijA5g==vruSHAxfbIBClHUA'
    }}

    https.get(options,  (response)=>{
        response.on("data",(data)=>{
            theQuote = (JSON.parse(data));
            console.log(theQuote[0].quote)
            Pres.write(`<h1> Your Quote is : <br>${theQuote[0].quote} `);
            Pres.send();
            // console.log(theQuote)
            // res.write(`<h1>The Quote of the day is : ${theQuote[0].quote} </h1> `);
            // res.write("<img src='https://yt3.googleusercontent.com/U-sDVlPYqIRef8oMV_q0TKEjz3GqxH21Nddrd2xynd2JBiRzL64vyQ86ZG3uJzvMF6-4FVYa=s900-c-k-c0x00ffffff-no-rj'>")
            // res.send();
        })
    }
    
    )

})
    
    app.get("/" , (req,res)=>{
        res.sendFile(__dirname+"/index.html");
    })

   
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
app.use(bodyParser.urlencoded({extended : true}))
app.listen(3000, ()=>{
    console.log("server is running");

})
app.use(express.static("public"))
app.get("/" , (req,res)=>{
    res.sendFile( __dirname + "/index.html");
})
app.post("/" , (request , response )=>{
    console.log(request.body)
    var email = request.body.email;
    var fname = request.body.fname;
    var lname = request.body.lname;
    console.log( fname  , lname);
    response.send("OK");

var data = {
    member:[
        {
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME : fname,
                LNAME : lname,
            }
        }
    ]
    
}

var jsonData  = JSON.stringify(data);
const url = "https://us21.admin.mailchimp.com/lists/69a64b830f";
const options = {
    auth : "sahil1:8b61bbff53e8307c1fe2a0e40a5c874d-us21",
    method:"POST"

}
const requested = https.request(url,options,(xresponse)=>{
    xresponse.on("data",(data)=>{
        console.log(JSON.parse(data));
    })
})
requested.write(jsonData);
requested.end();




})


// api 8b61bbff53e8307c1fe2a0e40a5c874d-us21
// id 69a64b830f
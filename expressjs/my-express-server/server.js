const express = require("express")

const app = express();
app.get("/" , (req, res)=>{
    res.send("hello");

})
app.get("/shil" , (req, res)=>{
    res.send("xxxxx");

})
app.get("/author", (req,res)=>{
    res.send("this is the author");
})
app.get("contact" , (req, res)=>{
    res.send("My Phone Number is : 9304522673");

})
app.get("/images", (req,res)=>{
    res.send("Wanna see my pictures");
})
app.listen(1234, ()=>{
    console.log("server started");
});
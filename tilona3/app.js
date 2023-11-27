const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.set('view engine' , "ejs");
app.get("/" , (req,res)=>{
    res.render("list" , {sahil : "myNameisSahil"})
})
app.listen(1234)
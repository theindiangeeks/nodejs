const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.listen(1234);
app.set("view engine" , "ejs");
var items = ['eat' , 'sleep','drink']
app.get("/"  , (req,res)=>{

    var date = new Date();
    var locale = 'en-US';
    var object = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        dayPeriod:"long",
        hour:	"2-digit"}

    var hindiDAte  = date.toLocaleString(locale , object)
    res.render("list" , {date: hindiDAte , sahl:'dffdf' , items:items})
    console.log(items);
})
app.post('/' , (req,res)=>{
    var item = req.body;
    items.push(item.todos);
    console.log(item);
    
    res.redirect('/');
})
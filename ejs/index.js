const express = require('express');
const app = express();
app.set('view engine' , "ejs");
app.listen(1234);
app.get("/" , (req,res)=>{
    var day = new Date();
    console.log(day.getDay())
    var whichDay = day.getDay();
    
    if (whichDay == 0 || day.whichDay == 6) {
        res.render("index" , {todayDay : "WeekEND"})
    }else{
        res.render('index' , {todayDay:"Work Days"})
    }
        

})
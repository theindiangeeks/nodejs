const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var Jimp = require("jimp");
app.set("view engine" , "ejs")
app.listen(8000)
// default options
app.use(fileUpload());
var items = ''
app.use(express.static('public'));

app.get('/', (req,res)=>{
    // console.log(sampleFile.name)
    res.render("index" , {sample:items})
    console.log(items)
})
app.post('/upload', function(req, res) {
  

console.log(req.body)
if(req.body.isblur=='on' && req.body.isgrey=="on"){

    var task = 3
    
}else if(req.body.isblur=="on"){
    var task = 2
}else if(req.body.isgrey == "on"){
    var task = 1
}
console.log(task)

console.log(req.files.sampleFile)
var sampleFile = req.files.sampleFile ;
console.log(__dirname+'/'+sampleFile.name)
 function copying(){
 sampleFile.mv(__dirname+'/public/'+ sampleFile.name , (error)=>{
    if (error){
        console.log(error)
    }
})
}
copying();

 function editing(){

   
    var location = "public/"+sampleFile.name
    console.log(location);
    Jimp.read(location, (err, lenna) => {
    if (err) {console.log('err')}; 
    console.log('task '+task)
    console.log(typeof(task))
    if ( task == 1){
        lenna.blur(15).write("public/" +"edit"+sampleFile.name); 
    }
    else if (task == 2){
        lenna.greyscale().write("public/" +"edit"+sampleFile.name); 
    }
    else if (task == 3){
        lenna.greyscale().blur(30).write("public/" +"edit"+sampleFile.name); 
    }
   
    // items.push(sampleFile.name);
    items = sampleFile.name
    res.redirect("/")
  });
}
setTimeout(
    editing,5000
)


});
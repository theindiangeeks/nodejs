const express = require('express');

const bodyParser = require('body-parser')
const jimp = require('jimp');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload())
app.set('view engine' , 'ejs')

app.listen(8000);

app.get('/' , (req,res)=>{
    const owner = "SAHIL"
    res.render("index" , {name:owner} )
})
app.post("/upload" , (req,res)=>{
    console.log(req.files.sampleFile)
})
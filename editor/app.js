const express = require('express');
const bodyParser = require('body-parser')
const jimp = require('jimp');
const app = express();
const fileUpload = require('express-fileupload')
app.listen(8000);
app.use(fileUpload());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine' , 'ejs')
app.use(express.static('public'))
var editedImage = "";

app.get("/" , (req,res)=>{
    console.log(editedImage);
    res.render("index" , {imageUrl : editedImage})
})

app.post("/" , (req,res)=>{
    var fileEdit = (req.files.image)
    var destination = "public/"+fileEdit.name;
    console.log(destination);
    fileEdit.mv(destination, function(err) {
        if (err)
          return res.status(500).send(err);
    
        
      });

      var editing = ()=>{
        jimp.read(destination, (err, lenna) => {
            if (err) throw err;
            lenna
               // resize
              // set JPEG quality
              .greyscale() // set greyscale
              .blur(30)
              .write('public/edit'+ fileEdit.name); // save
          });
      }
      setTimeout(editing , 5000)
      editedImage = 'edit' + fileEdit.name
      res.redirect('/')
      

})
var express = require('express')
var multer  = require('multer')
var Jimp = require("jimp");

// open a file called "lenna.png"

var port = 3000;

var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      file.originalname = "userImage.jpg"
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3000/a.
*/
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.post('/', upload.single('profile-file'), function (req, res, next) {
  Jimp.read("uploads/userImage.jpg", (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(1000, 1000) // resize
      .quality(100) // set JPEG quality
      // set greyscale
      .brightness( 0.1 )          // adjust the brighness by a value -1 to +1
      .contrast( 0.35 )      
      .write(`uploads/${Math.random()}.jpg`)
      .write("uploads/userImage1.jpg"); // save
  });
  
  // req.file is the `profile-file` file
  // req.body will hold the text fields, if there were any
  // console.log(JSON.stringify(req.file))
  // var response = '<a href="/">Home</a><br>'
  // response += "Files uploaded successfully.<br>"
  // response += `<img src="${req.file.path}" /><br>`
  res.redirect("/")

})


   

app.listen(port,() => console.log(`Server running on port ${port}!`))
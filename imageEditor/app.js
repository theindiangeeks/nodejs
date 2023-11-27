var Jimp = require("jimp");

// open a file called "lenna.png"
Jimp.read("userImagge.jpg", (err, lenna) => {
  if (err) {console.log('err')}; 
  lenna.greyscale().dither565().sepia().write("lasdf.jpg"); 
});
var Jimp = require("jimp");

// open a file called "lenna.png"
Jimp.read("damorad.png", (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(1000, 1000) // resize
    .quality(100) // set JPEG quality
    // set greyscale
    .brightness( 0.1 )          // adjust the brighness by a value -1 to +1
    .contrast( 0.35 )      
    .write("lena-small-bw.jpg"); // save
});

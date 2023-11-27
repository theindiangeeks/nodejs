//Todo list 
const express = require("express");
const app = express();
app.listen(1234 , ()=>{
    console.log("working");
})
app.get("/" , (req , res)=>{
    var date = new Date();
    console.log(date.getDay());
    if(date.getDay() == 6 || date.getDay() == 0 ){
        res.write("yeee its weekend")
    }else{
        res.write("boo we need to work right now ")
    }
    res.send(<form method="POST" action="/profile-upload-single" enctype="multipart/form-data">
    <div>
        <label>Upload profile picture</label>
        <input type="file" name="profile-file" required/>
    </div>
    <div>
        <input type="submit" value="Upload" />
    </div>
</form>);
})
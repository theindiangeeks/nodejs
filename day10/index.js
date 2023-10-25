const _ = require('fs');
_.writeFile("sahil.txt" , 'sahilsingh' , (err , lol)=> {
    if (err){
        console.log("DF");}
        else{
            console.log(lol)
        }
    
}  )
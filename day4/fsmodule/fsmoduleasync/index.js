const {readFile , writeFile} = require("fs");

readFile("text.txt" , "utf-8" ,  (err,result)=> {
    if(err){
        console.log(err);

    }
    console.log(result);
    writeFile("writingFile" , "sahil singh ", (err , result) => {
        if (err){
            console.log("error");
        }
        console.log(result);
    })
})
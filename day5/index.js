const { readFile , writeFile} = require('fs');

readFile("text.txt" , "utf8" , (err,result)=> { 
    if (err){
        console.log(err);
    
    }
    console.log(result);
})

writeFile("text.txt" , "I love Physics Wallah", (err,result)=> {
    if (err){
        console.log("error");
    }
    console.log(result);
}

)

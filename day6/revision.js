const {readFileSync , writeFile} = require('fs');
const sahil = (readFileSync("text.txt","utf-8"));
console.log(sahil);
writeFile("sahil.txt" , " i am the king of the jungle" ,(err,comp)=> {
    if(err){
        console.log("there is a error");
    }
    console.log("df")
})
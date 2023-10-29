//In this video we'll see promises in the javascript
let y = new Promise((resolve , reject) =>{
    if( 1==3){
        resolve("HEy your maths is good");
    }
    else{
        reject("Oh now you are wrong");
    }
})
y.then((message)=>{
    console.log(message);
})
// }).catch((message)=>{
//     console.log("this is the catch" + message );
// })
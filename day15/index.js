let y = new Promise((resolve , reject)=>{
    if ( 11 == 11){
        reject("OKK GOOD"); // catch
    }
    else{
        resolve ("NOOO"); // then
    }
})


y.catch((x)=>{
    console.log(x);
})
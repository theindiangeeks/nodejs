// In this particular articles we'll how to do the async and await function in the nodejs
let y = async ()=>{
    let x = new Promise((resolve,reject)=>{
        console.log("WAIT");
        console.log("WAIT");
        setTimeout(() => {
            resolve("DONE !!");
        }, 5000);
    })
    let result = await x;
    console.log(result);
}
y();
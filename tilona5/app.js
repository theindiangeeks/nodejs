//this is the scope in the javascript
// if (1==1){
//     let i = 10
//     const x = 10
//     console.log(i)
// }
// console.log()
// if(2==2){
//     let i = 12
//     console.log(x)
// }
// console.log()

//the constant and the let are the local scope and can't be used outside of the if else statement or for loops for any loops that has curly braces surrounding them 
// in the function eveything is local variable let and constant 
// but how can i create a global variable inside the function i have this question 

var i = 10;
const f = ()=>{
   i = 12;
}
f()
console.log(i)

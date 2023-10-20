const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());

//  OS RUNTIME
const object1 = {
    name: os.type(),
    uptime:os.uptime(),
    freeram : os.freemem(),
    userino : os.userInfo()
}
console.log(object1);




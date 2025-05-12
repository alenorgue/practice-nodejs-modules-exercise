// Leer README
const os = require('os');

console.log("Total memory: " + os.totalmem()/100000);
console.log("Hostname: " + os.hostname());
console.log("Operating system name: " + os.type());

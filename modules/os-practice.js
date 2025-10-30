const os = require('node:os');

console.log(`CPUS ${os.cpus().length}`);
console.log('Total Memory ', os.totalmem() / (1024 * 1024 * 1024) ) //GB
console.log('Total Free ' , os.freemem() / (1024 * 1024)) // MB
console.log('Uptime ', os.uptime() / (60 * 60)) //Hours
console.log('Hostname ', os.hostname());
console.log('User Info ', os.userInfo())//user ifo
console.log('Machine ', os.machine());
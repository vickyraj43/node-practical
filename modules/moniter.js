const os = require('node:os');
function monitor(){
   //take a snapshot 
   //take another snapshot after a second

   const oldCpus = os.cpus();
   setTimeout(() => {
    const newCpus = os.cpus();
   } , 1000)
}

setInterval(monitor , 1000);
const cluster = require("node:cluster");
const os = require('node:os');

function doWork(duration){
    const start = Date.now();
    while(Date.now() - start < duration){

    }
}
console.log('outside', cluster.isPrimary , process.pid);
if(cluster.isPrimary){
    console.log('Create new instance');
    const cpuNo = os.cpus().length;
    console.log('Cpu length', cpuNo);
    // for(let i=0; i<cpuNo; i++){
        console.log('create fork');
        cluster.fork();
                cluster.fork();

                        cluster.fork();

    // }

}else{
    console.log('isWorker', cluster.isWorker);
const express = require('express');
const app = express();

console.log(cluster.isMaster);
console.log(cluster.isPrimary);
console.log(cluster.isWorker);
app.get('/' , (req , res) => {
    console.log(`Process id (/) ${process.pid}`)
    doWork(5000);
    res.send('full success');
});

app.get('/fast' , (req , res) => {
        console.log(`Process id (/fast) ${process.pid}`);

    res.send(`fast running success ${process.id}`);
})
app.listen(2000 , () => {
    console.log(`Server running in ${2000}`)
})
}
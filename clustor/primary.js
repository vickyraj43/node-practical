const cluster = require('cluster');
const os = require('os');
const  {fileURLToPath}   = require('url');
const {dirname} = require('path');

const __directoryName = dirname(fileURLToPath(import.meta.url));
console.log(`Directry name :: ${__dirname}`);

const cpuLength = os.cpus().length;

console.log(`Total number of CPU :: ${cpuLength}`);
console.log(`Process Id :: ${process.pid}`);

cluster.setupPrimary({
    exec: __dirname + "/app.js"
})

for(let i=0; i < cpuLength ; i++){
    cluster.fork();
}

cluster.on('exit' , (worker) => {
    console.log(`Worker has been killed ${process.pid}`);
    console.log(`Starting another worker`);
    cluster.fork();
})
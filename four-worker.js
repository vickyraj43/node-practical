const {parentPort, workerData} = require('worker_threads');


let counter = 0;
// console.log(`Thread count: ${workerData.thread_count}`);
for(let i=0; i< 100000000000 / workerData.thread_count; i++){
    counter++;
}

parentPort.postMessage(`Blocking route completed with counter: ${counter}`);
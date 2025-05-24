const {parentPort} = require('worker_threads');

let counter = 0;
for(let i=0; i< 1000000000000000; i++){
    counter++;
}

parentPort.postMessage(`Blocking route completed with counter: ${counter}`);

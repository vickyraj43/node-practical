 const express = require('express');
 const app = express();
 app.use(express.json());
 const { Worker } = require('worker_threads');
 const THREAD_COUNT = 4;
 
 function createWorker(){
    return new Promise((res , rej) => {
        const worker = new Worker('./four-worker.js' , {
            workerData:  {thread_count: THREAD_COUNT}
        });
     worker.on('message' , (message) => {
         res(message);
     })
 
     worker.on('error' , (error) => {
         rej('Error in worker thread');
     })
    })
 }

 app.get('/non-blocking' , (req , res) => {
     res.send('This is a non-blocking route');
 })
 
 app.get('/blocking' , async (req , res) => {
    const workerPromise  = [];
    for(let i=0; i< THREAD_COUNT; i++){
        workerPromise.push(createWorker());
    }
    const threadResults = await Promise.all(workerPromise);
    const total = threadResults.reduce((acc , curr) => { return  acc + curr} , 0)
    res.send(`Blocking route completed with counter: ${total}`);
 })
 
 
 
 app.listen(3000 , () => {
     console.log(`Port is running on ${3000}`)
 })
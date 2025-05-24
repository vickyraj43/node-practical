const express = require('express');
const app = express();
app.use(express.json());
const { Worker } = require('worker_threads');


app.get('/non-blocking' , (req , res) => {
    res.send('This is a non-blocking route');
})

app.get('/blocking' , (req , res) => {
    // let counter = 0;
    // for(let i=0; i< 1000000000000000; i++){
    //     counter++;
    // }
    const worker = new Worker('./worker.js');
    worker.on('message' , (message) => {
        res.send(message);
    })

    worker.on('error' , (error) => {
        res.status(404).send('Error in worker thread');
    })
})



app.listen(3000 , () => {
    console.log(`Port is running on ${3000}`)
})
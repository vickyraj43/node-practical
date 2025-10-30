const express  = require('express');
const app = express();


app.get('/heavy' , (req , res) => {
    let counter =0;
    for(let i=0; i< 1000000000; i++){
        counter ++ ;
    }
    res.status(200).send(`Total heavy count ${counter}`); 
})


app.listen(3000 , () => {
    console.log(`Server running on port ${3000}`);
    console.log(`Processs Id ${process.pid}`);
})
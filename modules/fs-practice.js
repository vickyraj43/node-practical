const fs = require('node:fs');

function createFile(pathName){
    //sync
    // fs.writeFileSync(pathName , "Hello World \n");
    // console.log('File has been created');
    // fs.appendFileSync(pathName , 'Vicky here');

    //Async using call back (problem callback hell)
    // fs.writeFile(pathName , "Hello Node js \n" , (err) => {
    //     if(err){
    //         console.log('Something went wrong while creating file');
    //         return;
    //     }
    //     fs.appendFile(pathName , "vicky here" , (err) => {
    //         if(err){
    //             console.log('Some thing went wrong while creating file');
    //             return;
    //         }
    //         console.log('File appended successfully');
    //     })
    //     console.log('File has been created asynchronously');
    // });

    //Solution using promise 
     const fileCreatedPromise = new Promise((res , rej) => {
         fs.writeFile(pathName , 'Vicky ', (err)=> {
            if(err){
                rej('Someting went wrong while createing file');
            }
            res('Succesfully created file ');
         })
     });

     const appendFilePromise = new Promise((res , rej) => {
        fs.appendFile(pathName , 'my name is ', (err) => {
            if(err){
                rej('Something went wrong while appending file');
            }
            res('File appended successfully');
        })
     })

     fileCreatedPromise.then(data => {
        console.log(data);
        appendFilePromise.then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
     }).catch(err => {
        console.log(err);
     })
    console.log('File has been created');

}

createFile('./hello.txt');

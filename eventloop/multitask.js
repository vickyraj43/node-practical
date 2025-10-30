process.env.UV_THREADPOOL_SIZE = 8
const https = require('node:https');
const crypto = require('node:crypto');
const fs = require('node:fs');

console.log('Current thread pool size:', process.env.UV_THREADPOOL_SIZE || 'Default (4)');


const start = Date.now();
function doRequest(){
    https.request('https://www.google.com' , res => {
        res.on('data' , () => {});
        res.on('end' , () => {
            console.log(Date.now() - start)
        })
    }).end();
}

function doHash(){
    crypto.pbkdf2('pass' , 'salt' , 1000000 , 512 , 'sha512' , () => {
        console.log('Hash :: ', Date.now() - start);
    });
}
doRequest();
doHash();
doHash();
doHash();
setImmediate(() => console.log('setImmediate'));
doHash();
fs.readFile('./demo.txt' , 'utf8' , () => {
    console.log('FS : ', Date.now() - start);
});


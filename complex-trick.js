const fs = require('fs');
const crypto = require('crypto');
console.log('Start');
setTimeout(() => {
  console.log('setTimeout 1');
  Promise.resolve().then(() => console.log('promise inside setTimeout'));
  process.nextTick(() => console.log('nextTick inside setTimeout'));
}, 0);
setImmediate(() => {
  console.log('setImmediate 1');
  fs.readFile('./demo.txt', () => {
    console.log('fs inside setImmediate');
    setTimeout(() => console.log('Timeout inside fs inside setImmediate'), 0);
  });
});
fs.readFile('./demo.txt', () => {
  console.log('File read');
  crypto.pbkdf2('pass', 'salt', 100000, 64, 'sha512', () => {
    console.log('crypto done inside file read');
    setImmediate(() => {
      console.log('setImmediate inside crypto');
    });
    process.nextTick(() => {
      console.log('nextTick inside crypto');
    });
  });
});
process.nextTick(() => console.log('Main nextTick'));
Promise.resolve().then(() => console.log('Main promise'));
console.log('End');



/*** OUTOUT
 * Start, 
 * End, 
 * Main nextTick' 
 * Main promise
 * Timeout inside fs inside setImmediate 
 * setImmediate 1
 * nextTick inside crypto
 * setImmediate inside crypto
 *crypto done inside file read
* nextTick inside setTimeout
 * 'promise inside setTimeout'

*/

/****
Start 
End 
Main nextTick 
main promise 
setTimeout 1 
nextTick inside setTimeout 
promise inside setTimeout 
setImmediate 1 
 File read 
 fs inside setImmediate 
 Timeout inside fs inside setImmediate 
crypto done inside file read
nextTick inside crypto 
setTimmediate inside crypto
**/
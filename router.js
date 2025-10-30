const fs = require('fs');
const crypto = require('crypto');

console.log('Main start');

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
  console.log('Crypto done');

  setTimeout(() => {
    console.log('setTimeout inside crypto');
  }, 0);

  process.nextTick(() => {
    console.log('nextTick inside crypto');
  });

  Promise.resolve().then(() => {
    console.log('promise inside crypto');
  });
});

fs.readFile(__filename, () => {
  console.log('File read');

  setImmediate(() => {
    console.log('setImmediate inside file');
  });
});

console.log('Main end');

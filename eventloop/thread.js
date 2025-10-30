const crypto = require('node:crypto');

const start = Date.now();
crypto.pbkdf2('pass' , 'salt' , 100000 , 512 , 'sha512' , (err , derivedKey) => {
    console.log('1:' , Date.now() - start);
});

crypto.pbkdf2('pass' , 'salt' , 100000 , 512 , 'sha512' , (err , derivedKey) => {
    console.log('2:' , Date.now() - start);
})

crypto.pbkdf2('pass' , 'salt' , 100000 , 512 , 'sha512' , (err , derivedKey) => {
    console.log('3:' , Date.now() - start);
})
crypto.pbkdf2('pass' , 'salt' , 100000 , 512 , 'sha512' , (err , derivedKey) => {
    console.log('4:' , Date.now() - start);
})
crypto.pbkdf2('pass' , 'salt' , 100000 , 512 , 'sha512' , (err , derivedKey) => {
    console.log('5:' , Date.now() - start);
})
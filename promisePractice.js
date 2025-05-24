const { error } = require("winston");

//use of promise.all() and promise.allSettled()
const fristNamePromise = new Promise((resolve , reject) => {
    const firstName = "vicky";
    if(firstName){
        // setTimeout(() => {
            resolve(firstName);
        // } , 0)
    }else{
        reject("Firstname Not Found");
    }
});

const middleNamePromise = new Promise((resolve , reject) => {
   const middelName = "";
   if(middelName){
        resolve(middelName);
   }else{
    reject("MiddleName not found");
   }
});

const lastNamePromise = new Promise((resolve , reject) => {
    const lastName = "thakur";
    if(lastName){
        resolve(lastName)
    }else{
        reject("Lastname not found");
    }
})

// Promise.all() will return the result of all promises if all are resolved, otherwise it will return the first rejected promise.
const allPromise = Promise.all([fristNamePromise , middleNamePromise , lastNamePromise]);
allPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})

//Promise.allSettled() takes an array of Promises and waits for all of them to settle (either fulfilled or rejected), then returns an array of result objects for each promise.
const allSettledPromise = Promise.allSettled([fristNamePromise , middleNamePromise , lastNamePromise]);
allSettledPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})

//Promise.race() returns a promise that settles (fulfills or rejects) as soon as any of the input promises settles — whichever settles first, whether it's success or failure.
const  racePromise = Promise.race([fristNamePromise , middleNamePromise , lastNamePromise]);
racePromise.then((value) => {
    console.log("race" , value);
}).catch((error) => {
    console.log("race" ,error);
})

//Promise.any() returns the first fulfilled promise. It ignores rejections and only resolves if at least one promise fulfills.
//If all promises reject, then it rejects with AggregateError.
const anyPromise = Promise.any([fristNamePromise , middleNamePromise , lastNamePromise]);
anyPromise.then((value) => {
    console.log("any", value);
}).catch((error) => {
    console.log("any", error);
})


//own promise 

function myPromiseAll(promises){
    return new Promise((resolve , reject) => {
          let promiseResult = [] , count = 0;
         promises.forEach((record) => {
             return Promise.resolve(record).then((rec) => {
                promiseResult.push(rec);
                count++;
                if(promises.length === count) resolve(promiseResult);
              }).catch(reject);
              
          })
    })
}

myPromiseAll([fristNamePromise , middleNamePromise , lastNamePromise])
    .then(value => {
        console.log('userdefined', value);
    }).catch(err => {
        console.log('userdefined', err);
    })
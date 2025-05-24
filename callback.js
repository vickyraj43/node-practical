function calc(a , b , operation){
    return operation(a , b);
}

function add(a , b){
    return a + b;
}
let  sub = (a , b) => (a -b);
console.log(calc(5 , 6 , add));
console.log(calc(5 , 6 , sub));


//map use

const record = [1 , 2, 3, 4, 5];
const result = record.map((res) => {
    return res * 2;
})
console.log(result);

//filter 
const record1 = [2, 3, 4, 5,6 ,4,3];
const result2 = record1.filter(res => res > 4);
console.log(result2);

//reduce 
const record2 = [4, 3,4,5,6,3];
const initialValue = 0;
const result3 = record2.reduce((accum , curr ,i ,arr) => {
    return accum += curr;
}, initialValue);
console.log(result3);


const finalRecord = [3 , 4, 2, ,3,6,7,5,3];
const finalResult = finalRecord.filter(res => res > 2).map((res) => res * 2).reduce((accum, curr) => accum += curr , 0);
console.log(finalResult);
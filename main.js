// const mainLength = parseInt(prompt("Enter main length of the array:"))
// const innerLength = parseInt(prompt("Enter inner length of the array:"))
// const value = prompt("Enter a value of all arrays:");

// function fillArr(mainLength, innerLength, value) {
//     const arr = [];
// if (isNaN(mainLength) || isNaN(innerLength)) {
//     return "You have entered a wrong number!";
// }
//     else {
//         for (let i = 0; i < mainLength; i++) {
//             const innerArr = [];
//             for (let j = 0; j < innerLength; j++) {
//                 innerArr.push(value);
//             }
//             arr.push(innerArr);
//         }
//         return arr;
//     }
// }
// const mainArr = fillArr(mainLength, innerLength, value);
// console.log(mainArr);


let arrLength = prompt("Enter array length:");
let arr = [];

for (let i = 0; i < arrLength; i++) {
    let arrItem = prompt("Enter array item:");
    arr.push(arrItem);
}

console.log(`Array: ${arr}`);

arr.sort((a, b) => a - b);
console.log(`Array after sorting: ${arr}`);

arr.splice(1, 3);
console.log(`Array after slicing from 2 to 4 item included: ${arr}`);
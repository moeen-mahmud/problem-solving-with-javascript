/**
 * Calculate the sum of numbers in an array of numbers
 */

let arrNum = [2, 3, -1, 5, 7, 9, 10, 15, 19, 43];

function sumOfArrays(arrNum) {
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    sum += arrNum[i];
  }
  return sum;
}

console.log(sumOfArrays(arrNum));

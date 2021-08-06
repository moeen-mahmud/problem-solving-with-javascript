/**
 * Create a function that receives an array of numbers and returns an array containing only the positive numbers
 */

const arrNum = [2, 3, -4, -9, -2, 5, 7, 10, 15, 95];

function findPositiveNum(arrNum) {
  let newArr = [];
  for (let i = 0; i < arrNum.length; i++) {
    let positive = arrNum[i];
    if (positive >= 0) {
      newArr.push(positive);
    }
  }
  return newArr;
}

console.log(findPositiveNum(arrNum));

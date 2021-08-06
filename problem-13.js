/**
 * Find the maximum number in an array of numbers
 */

const arrNum = [2, 3, -4, -9, -2, 5, 12, 98, 7, 10, 15, 95];

function maxArrayNum(arrNum) {
  let max = arrNum[0];
  for (let i = 0; i <= arrNum.length; i++) {
    if (arrNum[i] > max) {
      max = arrNum[i];
    }
  }
  return max;
}

console.log(maxArrayNum(arrNum));

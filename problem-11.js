/**
 * Calculate the average of the numbers in an array of numbers
 */

let arrNum = [2, 3, 5, 7, 9, 10, 15];

let total = 0;

for (let i = 0; i < arrNum.length; i++) {
  total += arrNum[i];
}
let avg = total / arrNum.length;
console.log(avg.toFixed(2));

/** A function that will calculate the sum of digits of a positive integer number
 *
 * @param {positive integer} num
 * @returns {number} sum of positive integer
 */
function sumOfPositiveNum(num) {
  let sum = 0;
  let converted = num.toString();
  for (const element of converted) {
    let digit = parseInt(element);
    sum += digit;
  }
  return sum;
}

console.log(sumOfPositiveNum(1234));

/**A function that will receive two arrays of numbers
 * as arguments and return an array composed of all
 * the numbers that are either in the first array or
 * second array but not is both
 *
 * @param {object} arr1
 * @param {object} arr2
 * @returns {object} unique array
 */
function uniqueArray(arr1, arr2) {
  let unique = [];
  for (const element of arr1) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  for (const element of arr2) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const firstArr = [1, 3, 4, 2, 6, 8, 12, 14];
const secondArr = [13, 14, 7, 3, 6, 19, 15];

console.log(uniqueArray(firstArr, secondArr));

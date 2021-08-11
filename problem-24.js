/**A function that will merge two arrays and return
 * the result as a new array
 * 
 * @param {object} arr1 
 * @param {object} arr2 
 * @returns {object} merged arrays
 */
function mergedArrays(arr1, arr2) {
  let merged = [];
  for (const element of arr1) {
    merged.push(element);
  }
  for (const element of arr2) {
    merged.push(element);
  }
  return merged;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

console.log(mergedArrays(arr1, arr2));

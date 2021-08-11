/** A function that will receive two arrays and will return
 * an array with elements that are in the first array but not
 * in the second
 *
 * @param {object} arr1
 * @param {object} arr2
 * @returns {object} merge only first array
 */
function onlyFirst(arr1, arr2) {
  let merged = [];
  for (const element of arr1) {
    if (!arr2.includes(element)) {
      merged.push(element);
    }
  }
  return merged;
}

const firstArr = [1, 3, 4, 2, 13, 6, 8, 12, 14];
const secondArr = [13, 14, 7, 3, 6, 19, 15];

console.log(onlyFirst(firstArr, secondArr));

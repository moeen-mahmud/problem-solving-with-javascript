/** A function that will receive an array of numbers as argument 
 * and will return a new array with distinct elements
 * @param {object} arr 
 * @returns {object} distinct item(s)
 */
function distinctItems(arr) {
  let distinct = [];
  for (const element of arr) {
    if (distinct.indexOf(element) == -1) {
      distinct.push(element);
    }
  }
  return distinct;
}

const arrNums = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 6, 9];

console.log(distinctItems(arrNums));

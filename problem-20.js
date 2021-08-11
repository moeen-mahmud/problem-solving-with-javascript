//Rotate an array to the left 1 position

const arrSeries = [1, 2, 3];

function rotateLeft(arr) {
  let rotated = arr.shift();
  arr.push(rotated);
  return arr;
}
console.log(rotateLeft(arrSeries));

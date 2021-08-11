//Rotate an array to the right 1 positon

const arrSeries = [1, 2, 3];

function rotateRight(arr) {
  let rotated = arr.pop();
  arr.unshift(rotated);
  return arr;
}
console.log(rotateRight(arrSeries));

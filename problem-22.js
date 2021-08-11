//Reverse an array

const arr = [1, 2, 3, 4, 5, 6];

function reversedArray(arr) {
  let reversed = [];
  for (const element of arr) {
    reversed.unshift(element);
  }
  return reversed;
}
console.log(reversedArray(arr));

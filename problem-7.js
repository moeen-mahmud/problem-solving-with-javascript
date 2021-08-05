/**
 * Calculate the sum of odd numbers greater than 10 and less than 30
 */

let j = 0;
for (let i = 10; i < 30; i++) {
  if (i % 2 != 0) {
    j += i;
  }
}
console.log(j);

/** A function that calculate the sum of 100 prime numbers.
 * @param {number} n
 * @returns {number} return sum of all primes
 */
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimes(nPrime) {
  let sum = 0;
  let n = 1;
  let i = 2;
  while (n <= nPrime) {
    if (isPrime(i)) {
      sum += i;
      n++;
    }
    i++;
  }
  return sum;
}

console.log(sumOfPrimes(100));

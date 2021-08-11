/**A function that will return a Boolean specifying if a number is prime
 *
 * @param {number} n
 * @returns {boolean} true if prime, false otherwise.
 */

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(101));

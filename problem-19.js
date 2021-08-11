//Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeNums(nPrime, startAt) {
  let arr = [];
  let n = 1;
  let i = startAt;
  while (n <= nPrime) {
    if (isPrime(i)) {
      arr.push(i);
      n++;
    }
    i++;
  }
  return arr;
}

console.log(printPrimeNums(10, 100));

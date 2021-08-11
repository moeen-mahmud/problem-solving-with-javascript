// Function that prints first 100 prime numbers

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeNums(nPrime) {
  let n = 1;
  let i = 2;

  while (n <= nPrime) {
    if (isPrime(i)) {
      console.log(n, "-->", i);
      n++;
    }
    i++;
  }
}

printPrimeNums(100);

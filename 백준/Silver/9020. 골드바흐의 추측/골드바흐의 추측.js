const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);

function isPrime(n) {
  if (n < 2) return false;
  const sq = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sq; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findPrime(n) {
  const primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function goldBach(n, primes) {
  const gold = [];
  const res = [];
  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j < primes.length; j++) {
      if (primes[i] + primes[j] === n) {
        gold.push([primes[i], primes[j]]);
      }
    }
  }

  let min = Infinity;
  for (let i = 0; i < gold.length / 2; i++) {
    const [a, b] = gold[i];
    if (min > Math.abs(a - b)) {
      min = Math.abs(a - b);
      res[0] = [a, b];
    }
  }
  return res;
}

for (let i = 1; i <= T; i++) {
  const n = Number(input[i]);

  const primes = findPrime(n);
  const result = goldBach(n, primes);
  console.log(result.flat().join(' '));
}

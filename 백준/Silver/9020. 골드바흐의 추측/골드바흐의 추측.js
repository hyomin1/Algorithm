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

function goldBach(n) {
  let min = Infinity;
  let result = [0, 0];
  for (let a = 2; a <= n; a++) {
    const b = n - a;
    if (isPrime(a) && isPrime(b)) {
      const diff = Math.abs(a - b);
      if (diff < min) {
        min = diff;
        result = [a, b];
      }
    }
  }
  return result;
}

for (let i = 1; i <= T; i++) {
  const n = Number(input[i]);

  const result = goldBach(n);
  console.log(result.join(' '));
}

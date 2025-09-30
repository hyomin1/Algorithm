const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = [];

function isPrime(num) {
  if (num < 2) return false;
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i <= N; i++) {
  if (isPrime(i)) arr.push(i);
}

let answer = 0;
let s = 0;
let e = 0;
let sum = 0;

while (e <= arr.length) {
  if (sum < N) {
    sum += arr[e++];
  } else if (sum > N) {
    sum -= arr[s++];
  } else {
    answer++;
    sum += arr[e++];
  }
}
console.log(answer);

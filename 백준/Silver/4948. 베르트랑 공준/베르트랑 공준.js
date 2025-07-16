const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

let index = 0;

function isPrime(n) {
  const sq = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sq; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

while (true) {
  const num = Number(input[index++]);
  if (num === 0) break;

  let answer = 0;
  for (let i = num + 1; i <= num * 2; i++) {
    if (isPrime(i)) answer++;
  }
  console.log(answer);
}

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [A, B, C] = input[0].split(' ').map(BigInt);

function pow(a, b) {
  if (b === 0n) return 1n;
  if (b === 1n) return a % C;

  const half = pow(a, b / 2n);
  if (b % 2n === 0n) {
    return (half * half) % C;
  } else {
    return (((half * half) % C) * a) % C;
  }
}
console.log(pow(A, B).toString());

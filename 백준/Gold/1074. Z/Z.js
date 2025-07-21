const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, r, c] = input[0].split(' ').map(Number);

let answer = 0;
function z(n, r, c) {
  if (n === 0) return;
  const half = 2 ** (n - 1);
  const size = half * half;
  if (r < half && c < half) {
    z(n - 1, r, c);
  } else if (r < half && c >= half) {
    answer += size;
    z(n - 1, r, c - half);
  } else if (r >= half && c < half) {
    answer += size * 2;
    z(n - 1, r - half, c);
  } else {
    answer += size * 3;
    z(n - 1, r - half, c - half);
  }
}

z(N, r, c); // 2 3 1
console.log(answer);

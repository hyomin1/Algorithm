const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const S = [];
const B = [];

for (let i = 1; i <= N; i++) {
  const [s, b] = input[i].split(' ').map(Number);
  S.push(s);
  B.push(b);
}

let minDiff = Infinity;

function dfs(index, s, b) {
  if (s !== 1 && b !== 0) minDiff = Math.min(minDiff, Math.abs(s - b));

  for (let i = index; i < N; i++) {
    dfs(i + 1, s * S[i], b + B[i]);
  }
}

dfs(0, 1, 0);
console.log(minDiff);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const k = Number(input[1]);

let left = 1;
let right = N * N; // 최대 범위

function count(mid) {
  let res = 0;
  for (let i = 1; i <= N; i++) {
    res += Math.min(N, Math.floor(mid / i));
  }
  return res;
}
let answer = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const cnt = count(mid);

  if (cnt < k) left = mid + 1;
  else {
    answer = mid;
    right = mid - 1;
  }
}
console.log(answer);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);
const [m, n] = input[1].split(' ').map(Number);

const A = input.slice(2, m + 2).map(Number);
const B = input.slice(m + 2, m + 2 + n).map(Number);

let answer = 0;

for (let i = 0; i < A.length; i++) {}

function getSum(arr) {
  const res = [0];

  const len = arr.length;

  for (let count = 1; count <= len; count++) {
    for (let start = 0; start < len; start++) {
      let sum = 0;

      for (let i = 0; i < count; i++) {
        sum += arr[(start + i) % len];
      }

      if (count === len && start > 0) break;
      res.push(sum);
    }
  }

  return res;
}
const sumA = getSum(A);
const sumB = getSum(B);

const map = new Map();

for (const sum of sumB) {
  map.set(sum, (map.get(sum) || 0) + 1);
}

for (const sum of sumA) {
  const need = T - sum;
  if (map.has(need)) {
    answer += map.get(need);
  }
}
console.log(answer);

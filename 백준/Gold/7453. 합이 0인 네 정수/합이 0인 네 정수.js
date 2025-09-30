const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const A = [];
const B = [];
const C = [];
const D = [];

for (let i = 1; i <= N; i++) {
  const [a, b, c, d] = input[i].split(' ').map(Number);
  A.push(a);
  B.push(b);
  C.push(c);
  D.push(d);
}

function makeSum(arr1, arr2) {
  const map = new Map();
  for (const element2 of arr1) {
    for (const element of arr2) {
      const sum = element + element2;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }
  return map;
}
let answer = 0;
const map = makeSum(A, B);

for (const c of C) {
  for (const d of D) {
    const sum = -(c + d);
    if (map.has(sum)) answer += map.get(sum);
  }
}

console.log(answer);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

let index = 1;

for (let i = 0; i < N; i++) {
  const obj = {};
  const n = parseInt(input[index++]);
  for (let j = 0; j < n; j++) {
    const [, type] = input[index++].split(' ');
    obj[type] = (obj[type] || 0) + 1;
  }
  const arr = Object.values(obj).map((v) => v + 1);

  const answer = arr.reduce((a, b) => a * b, 1) - 1;
  console.log(answer);
}

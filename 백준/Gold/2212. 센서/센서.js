const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const K = Number(input[1]);

const arr = input[2].split(' ').map(Number);

arr.sort((a, b) => a - b);

const diff = [];
for (let i = 0; i < arr.length - 1; i++) {
  diff.push(arr[i + 1] - arr[i]);
}

diff.sort((a, b) => b - a);

let answer = 0;

for (let i = K - 1; i < diff.length; i++) {
  answer += diff[i];
}
console.log(answer);

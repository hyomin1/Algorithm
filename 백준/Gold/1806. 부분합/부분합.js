const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let s = 0;
let e = 0;

let sum = 0;
let answer = Infinity;

while (e <= N) {
  if (sum < S) {
    sum += arr[e++];
  } else {
    answer = Math.min(answer, e - s);
    sum -= arr[s++];
  }
}

answer = answer === Infinity ? 0 : answer;
console.log(answer);

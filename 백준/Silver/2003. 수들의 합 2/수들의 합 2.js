const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const A = input[1].split(' ').map(Number);
let answer = 0;

let start = 0;
let end = 0;
let sum = 0;
while (true) {
  if (sum >= M) {
    if (sum === M) answer++;
    sum -= A[start++];
  } else {
    if (end === N) break;
    sum += A[end++];
  }
}

console.log(answer);

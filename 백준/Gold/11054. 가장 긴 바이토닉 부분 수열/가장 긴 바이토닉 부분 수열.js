const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);

const dp1 = Array(N).fill(1);
const dp2 = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j]) {
      dp1[i] = Math.max(dp1[i], dp1[j] + 1);
    }
  }
}

for (let i = N - 1; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (A[i] > A[j]) {
      dp2[i] = Math.max(dp2[i], dp2[j] + 1);
    }
  }
}

let answer = -Infinity;
for (let i = 0; i < N; i++) {
  answer = Math.max(answer, dp1[i] + dp2[i] - 1);
}
console.log(answer);

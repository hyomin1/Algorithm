const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const A = input[1].split(' ').map(Number);
const dp = Array.from({ length: N }).fill(1);
const prev = Array.from({ length: N }).fill(-1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
      prev[i] = j;
    }
  }
}

let maxIdx = 0;
let maxLen = 0;

for (let i = 0; i < dp.length; i++) {
  if (dp[i] > maxLen) {
    maxLen = dp[i];
    maxIdx = i;
  }
}
console.log(maxLen);
const answer = [];
while (maxIdx !== -1) {
  answer.push(A[maxIdx]);
  maxIdx = prev[maxIdx];
}
console.log(answer.reverse().join(' '));

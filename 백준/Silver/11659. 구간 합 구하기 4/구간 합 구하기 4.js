const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const S = [];
S[0] = 0;
for (let i = 1; i <= N; i++) {
  S[i] = S[i - 1] + arr[i - 1];
}
const answer = [];
for (let i = 2; i < 2 + M; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  answer.push(S[e] - S[s - 1]);
}

console.log(answer.join('\n'));

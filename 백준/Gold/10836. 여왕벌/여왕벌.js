const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);

const arr = Array(2 * M - 1).fill(1);

for (let i = 1; i <= N; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);

  let idx = 0;

  idx += a;

  for (let j = 0; j < b; j++) {
    arr[idx++] += 1;
  }
  for (let j = 0; j < c; j++) {
    arr[idx++] += 2;
  }
}

const answer = Array.from({ length: M }, () => Array(M).fill(1));

for (let i = 0; i < M; i++) {
  answer[M - 1 - i][0] = arr[i];
}
for (let j = 1; j < M; j++) {
  answer[0][j] = arr[M - 1 + j];
}

for (let i = 1; i < M; i++) {
  for (let j = 1; j < M; j++) {
    answer[i][j] = Math.max(
      answer[i - 1][j],
      answer[i][j - 1],
      answer[i - 1][j - 1]
    );
  }
}
answer.forEach((v) => {
  console.log(v.join(' '));
});

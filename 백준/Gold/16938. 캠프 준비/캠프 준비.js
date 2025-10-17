const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, L, R, X] = input[0].split(' ').map(Number);

// 문제는 2문제 이상, L <= 문제의 난이도 합 <= R, 가장 어려운 문제 - 가장 쉬운 문제 >= X

const A = input[1].split(' ').map(Number);

let answer = 0;
function dfs(start, path) {
  if (path.length >= 2) {
    const sorted = [...path].sort((a, b) => a - b);
    const sum = sorted.reduce((a, b) => a + b, 0);
    const diff = sorted[sorted.length - 1] - sorted[0];
    if (sum >= L && sum <= R && diff >= X) answer++;
  }

  for (let i = start; i < N; i++) {
    dfs(i + 1, [...path, A[i]]);
  }
}

dfs(0, []);
console.log(answer);

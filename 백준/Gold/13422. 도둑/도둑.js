const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);

let idx = 1;
for (let i = 0; i < T; i++) {
  const [N, M, K] = input[idx++].split(' ').map(Number);
  const home = input[idx++].split(' ').map(Number);

  let money = 0;
  let answer = 0;
  for (let j = 0; j < M; j++) {
    money += home[j];
  }

  if (money < K) answer++;
  if (N === M) {
    console.log(answer);
    continue;
  }

  for (let j = 1; j < N; j++) {
    const left = home[j - 1];
    money -= left;
    const right = home[(j + M - 1) % N];
    money += right;
    if (money < K) answer++;
  }
  console.log(answer);
}

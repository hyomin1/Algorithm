const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);

function dfs(N, now, path, res) {
  if (now === N) {
    // 수식 계산해서 0 확인
    const result = eval(path.replaceAll(' ', ''));
    if (result === 0) res.push(path);
    return;
  }

  const next = now + 1;
  dfs(N, next, path + ' ' + next, res);
  dfs(N, next, path + '+' + next, res);
  dfs(N, next, path + '-' + next, res);
}

for (let i = 1; i <= T; i++) {
  const N = Number(input[i]);
  const res = [];
  dfs(N, 1, '1', res);
  res.forEach((v) => console.log(v));
  if (i < T) console.log('');
}

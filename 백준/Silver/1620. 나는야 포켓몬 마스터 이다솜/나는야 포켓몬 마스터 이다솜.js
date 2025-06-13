const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map1 = {};
const map2 = {};
for (let i = 1; i <= N; i++) {
  map1[i] = input[i];
  map2[input[i]] = i;
}

for (let i = N + 1; i < N + 1 + M; i++) {
  const n = input[i];

  if (!isNaN(+n)) console.log(map1[n]);
  else console.log(map2[n]);
}

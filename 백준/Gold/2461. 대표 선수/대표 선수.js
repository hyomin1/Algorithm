const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = [];

for (let i = 1; i <= N; i++) {
  const scores = input[i].split(' ').map(Number);
  for (let j = 0; j < M; j++) {
    arr.push([i - 1, scores[j]]);
  }
}

arr.sort((a, b) => a[1] - b[1]);
const cnt = Array.from({ length: N }).fill(0);
let covered = 0;
let answer = Infinity;
let l = 0;
let r = 0;

while (r < arr.length) {
  if (covered === N) {
    answer = Math.min(answer, arr[r - 1][1] - arr[l][1]);

    cnt[arr[l][0]]--;
    if (cnt[arr[l][0]] === 0) covered--;
    l++;
  } else {
    if (cnt[arr[r][0]] === 0) covered++;
    cnt[arr[r][0]]++;
    r++;
  }
}
console.log(answer);

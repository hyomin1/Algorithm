const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [L, C] = input[0].split(' ').map(Number);

const arr = input[1].split(' ');
const sorted = [...arr].sort();

const answer = [];
function dfs(start, path) {
  if (path.length === L) {
    answer.push(path);
    return;
  }
  for (let i = start; i < sorted.length; i++) {
    dfs(i + 1, path + sorted[i]);
  }
}

dfs(0, '');
const moeum = ['a', 'e', 'i', 'o', 'u'];
const newAns = [];
for (const ans of answer) {
  let mCount = 0;
  let jCount = 0;
  for (let i = 0; i < ans.length; i++) {
    if (moeum.includes(ans[i])) mCount++;
  }
  jCount = ans.length - mCount;
  if (mCount >= 1 && jCount >= 2) {
    newAns.push(ans);
  }
}
// 최소 한개 모음, 최소 두개 자음 조건으로 필터링
newAns.forEach((v) => console.log(v));

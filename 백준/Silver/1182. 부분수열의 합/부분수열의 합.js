const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, S] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let answer = 0;
function dfs(index, sum) {
  if (N === index) {
    if (sum === S) {
      answer++;
    }
    return;
  }
  dfs(index + 1, sum + arr[index]);
  dfs(index + 1, sum);
}
dfs(0, 0);
if (S === 0) answer--;
console.log(answer);

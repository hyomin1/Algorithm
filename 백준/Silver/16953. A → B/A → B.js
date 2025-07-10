const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [A, B] = input[0].split(' ').map(Number);
let answer = Infinity;

function dfs(num, depth) {
  if (num > B) return;
  if (num === B) {
    answer = Math.min(answer, depth);
    return;
  }
  dfs(num * 2, depth + 1);
  dfs(parseInt(`${num}1`), depth + 1);
}

dfs(A, 1);
console.log(answer === Infinity ? -1 : answer);

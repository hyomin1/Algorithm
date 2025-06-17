const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = input.slice(1).map((line) => line.split(' ').map(Number));

let max = -Infinity;

function dfs(day, sum) {
  if (day === N) {
    max = Math.max(max, sum);
    return;
  }
  if (day > N) return;
  const [t, p] = arr[day];
  if (day + t <= N) dfs(day + t, sum + p);
  dfs(day + 1, sum);
}

dfs(0, 0);
console.log(max);

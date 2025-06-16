const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const op = ['+', '-', '*', '/'];
const numbers = input[1].split(' ').map(Number);

const opCounts = input[2].split(' ').map(Number);

const ops = opCounts.flatMap((v, i) => Array(v).fill(op[i]));

let min = Infinity;
let max = -Infinity;
const visited = Array(ops.length).fill(false);
function dfs(depth, cur) {
  if (depth === numbers.length) {
    min = Math.min(min, cur);
    max = Math.max(max, cur);
    return;
  }
  for (let i = 0; i < ops.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      switch (ops[i]) {
        case '+':
          dfs(depth + 1, cur + numbers[depth]);
          break;
        case '-':
          dfs(depth + 1, cur - numbers[depth]);
          break;
        case '*':
          dfs(depth + 1, cur * numbers[depth]);
          break;
        case '/':
          dfs(depth + 1, ~~(cur/numbers[depth]));
          break;
      }
      visited[i] = false;
    }
  }
}

dfs(1, numbers[0]);
console.log(max);
console.log(min);

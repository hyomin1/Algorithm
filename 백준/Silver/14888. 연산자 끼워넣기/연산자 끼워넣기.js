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

let min = Infinity;
let max = -Infinity;

function dfs(depth, cur, plus, minus, mul, div) {
  if (depth === N) {
    min = Math.min(min, cur);
    max = Math.max(max, cur);
    return;
  }

  if (plus > 0) dfs(depth + 1, cur + numbers[depth], plus - 1, minus, mul, div);
  if (minus > 0)
    dfs(depth + 1, cur - numbers[depth], plus, minus - 1, mul, div);
  if (mul > 0) dfs(depth + 1, cur * numbers[depth], plus, minus, mul - 1, div);
  if (div > 0) {
    dfs(depth + 1, ~~(cur / numbers[depth]), plus, minus, mul, div - 1);
  }
}

dfs(1, numbers[0], opCounts[0], opCounts[1], opCounts[2], opCounts[3]);
console.log(max);
console.log(min);

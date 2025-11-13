const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let cur = 0;

for (let w of arr) {
  if (w > cur + 1) break;

  cur += w;
}

console.log(cur + 1);

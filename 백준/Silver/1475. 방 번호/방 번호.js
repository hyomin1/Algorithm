const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = input[0];

const count = Array.from({ length: 10 }).fill(0);

for (const ch of N) {
  count[Number(ch)]++;
}

count[6] = Math.ceil((count[6] + count[9]) / 2);
count[9] = 0;

console.log(Math.max(...count));

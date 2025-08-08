const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [K, L] = input[0].split(' ').map(Number);

const map = new Map();

for (let i = 1; i <= L; i++) {
  const num = input[i];
  if (!map.has(num)) {
    map.set(num, 0);
  } else {
    map.delete(num);
    map.set(num, 0);
  }
}
const answer = [...map.keys()].slice(0, K);
answer.forEach((v) => console.log(v));

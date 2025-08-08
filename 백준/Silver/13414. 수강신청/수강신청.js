const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [K, L] = input[0].split(' ').map(Number);

const set = new Set();

for (let i = 1; i <= L; i++) {
  const num = input[i];
  set.delete(num);
  set.add(num);
}
const answer = [...set].slice(0, K);
console.log([...set].slice(0, K).join('\n'));

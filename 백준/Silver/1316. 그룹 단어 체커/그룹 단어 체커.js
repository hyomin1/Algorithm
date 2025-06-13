const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

let answer = 0;

const words = input.slice(1, N + 1);

for (const word of words) {
  let isRight = true;
  let prev = '';
  const set = new Set();
  for (const char of word) {
    if (char !== prev) {
      if (set.has(char)) {
        isRight = false;
        break;
      }
      set.add(char);
    }
    prev = char;
  }
  if (isRight) answer++;
}
console.log(answer);

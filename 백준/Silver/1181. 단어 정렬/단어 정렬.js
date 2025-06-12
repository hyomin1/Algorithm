const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const words = [...new Set(input.slice(1, N + 1))];
words.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

for (const word of words) {
  console.log(word);
}

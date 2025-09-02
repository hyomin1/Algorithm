const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const S = input[0];
const T = input[1];

function dfs(word) {
  if (word.length === S.length) {
    if (word === S) {
      console.log(1);
      process.exit(0);
    }
    return;
  }
  if (word.endsWith('A')) {
    dfs(word.slice(0, -1));
  }

  if (word.startsWith('B')) {
    const next = word.slice(1).split('').reverse().join('');
    dfs(next);
  }
}

dfs(T);
console.log(0);

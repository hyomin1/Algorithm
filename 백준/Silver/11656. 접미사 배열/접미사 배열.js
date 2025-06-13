const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const S = input[0];
const arr = [];
for (let i = 0; i < S.length; i++) {
  arr.push(S.slice(i));
}

arr.sort((a, b) => a.localeCompare(b));

arr.forEach((v) => console.log(v));

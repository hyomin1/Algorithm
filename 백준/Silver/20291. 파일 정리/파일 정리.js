const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const obj = {};
for (let i = 1; i <= N; i++) {
  const plus = input[i].split('.')[1];
  obj[plus] = (obj[plus] || 0) + 1;
}

const answer = [...Object.entries(obj)].sort((a, b) =>
  a[0].localeCompare(b[0])
);

let str = '';
for (const [key, value] of answer) {
  str += `${key} ${value}\n`;
}

console.log(str);

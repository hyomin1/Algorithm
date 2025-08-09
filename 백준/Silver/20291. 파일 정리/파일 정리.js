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
  const [_, plus] = input[i].split('.');
  obj[plus] = (obj[plus] || 0) + 1;
}

const answer = [...Object.entries(obj)].sort((a, b) =>
  a[0].localeCompare(b[0])
);

answer.forEach((v) => {
  console.log(v[0], v[1]);
});

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = [];
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

arr.forEach((v) => {
  console.log(v[0], v[1]);
});

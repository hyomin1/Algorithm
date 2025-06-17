const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
let answer = 0;
for (let i = 1; i <= N; i++) {
  const arr = `${i}`.split('').map(Number);
  let sum = i;

  for (const element of arr) {
    sum += element;
  }
  if (sum === N) {
    answer = Number(arr.join(''));

    break;
  }
}
console.log(answer);

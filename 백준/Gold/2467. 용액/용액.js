const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = input[1].split(' ').map(Number);

let left = 0;
let right = N - 1;

let min = Infinity;

let l = 0;
let r = 0;

while (left < right) {
  const sum = arr[left] + arr[right];
  const abs = Math.abs(sum);

  if (abs < min) {
    min = abs;
    l = arr[left];
    r = arr[right];
  }

  if (sum < 0) {
    left++;
  } else if (sum > 0) {
    right--;
  } else break;
}
console.log(l, r);

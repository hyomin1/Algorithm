const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1;

let min = Infinity;

let answer = null;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (min > Math.abs(sum)) {
    min = Math.abs(sum);
    answer = [arr[left], arr[right]];
  }
  if (sum < 0) {
    left++;
  } else if (sum > 0) {
    right--;
  } else break;
}
console.log(answer.join(' '));

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const A = input[1].split(' ').map(Number);

const arr = [];

function binarySearch(num) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

for (const num of A) {
  if (arr.length === 0 || arr[arr.length - 1] < num) {
    arr.push(num);
  } else {
    const idx = binarySearch(num);
    arr[idx] = num;
  }
}

console.log(arr.length);

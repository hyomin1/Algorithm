const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const arr = input.slice(0).map(Number);

function postOrder(start, end) {
  if (start >= end) return;
  const root = arr[start];
  let mid = start + 1;

  while (mid < end && arr[mid] < root) mid++;

  postOrder(start + 1, mid);
  postOrder(mid, end);
  console.log(root);
}

postOrder(0, arr.length);

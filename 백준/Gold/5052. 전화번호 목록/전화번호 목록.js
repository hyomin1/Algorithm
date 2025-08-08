const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);

let idx = 1;
for (let i = 0; i < T; i++) {
  const n = Number(input[idx++]);
  const arr = [];
  for (let j = 0; j < n; j++) {
    arr.push(input[idx++]);
  }
  let found = false;
  arr.sort();
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j + 1].startsWith(arr[j])) {
      found = true;
      break;
    }
  }
  console.log(found ? 'NO' : 'YES');
}

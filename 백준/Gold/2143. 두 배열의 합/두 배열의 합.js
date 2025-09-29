const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);

const A = input[2].split(' ').map(Number);
const B = input[4].split(' ').map(Number);

function makeSum(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      res.push(sum);
    }
  }

  return res;
}

const subA = makeSum(A);
const subB = makeSum(B);

subA.sort((a, b) => a - b);
subB.sort((a, b) => a - b);

let l = 0;
let r = subB.length - 1;
let answer = 0;

while (l < subA.length && r >= 0) {
  const sum = subA[l] + subB[r];

  if (sum === T) {
    let aCount = 0;
    let bCount = 0;
    const aVal = subA[l];
    const bVal = subB[r];
    for (let i = l; i < subA.length; i++) {
      if (subA[i] === aVal) {
        aCount++;
        l++;
      } else break;
    }

    for (let i = r; i >= 0; i--) {
      if (subB[i] === bVal) {
        bCount++;
        r--;
      } else break;
    }

    answer += aCount * bCount;
  } else if (sum < T) {
    l++;
  } else r--;
}
console.log(answer);

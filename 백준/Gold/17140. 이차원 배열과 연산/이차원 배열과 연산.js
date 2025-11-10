const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [r, c, k] = input[0].split(' ').map(Number);
let arr = input.slice(1).map((l) => l.split(' ').map(Number));

let answer = 0;

function sortArr(line) {
  const count = {};
  for (const x of line) {
    if (x === 0) continue;
    count[x] = (count[x] || 0) + 1;
  }

  const sorted = Object.entries(count).sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  return sorted.flat().map(Number).slice(0, 100);
}

let found = false;

while (answer <= 100) {
  if (arr[r - 1] && arr[r - 1][c - 1] === k) {
    found = true;
    break;
  }

  const rowLen = arr.length;
  const colLen = Math.max(...arr.map(row => row.length));

  if (rowLen >= colLen) {
    // R 연산
    const newArr = [];
    let maxLen = 0;
    for (let i = 0; i < rowLen; i++) {
      const sorted = sortArr(arr[i]);
      maxLen = Math.max(maxLen, sorted.length);
      newArr.push(sorted);
    }

    for (let i = 0; i < newArr.length; i++) {
      while (newArr[i].length < maxLen) newArr[i].push(0);
    }
    arr = newArr;
  } else {
    // C 연산
    const newArr = [];
    let maxLen = 0;
    
    for (let j = 0; j < colLen; j++) {
      const col = [];
      for (let i = 0; i < rowLen; i++) {
        col.push(arr[i][j] ?? 0);
      }
      const sorted = sortArr(col);
      maxLen = Math.max(maxLen, sorted.length);
      newArr.push(sorted);
    }
    
  
    const transposed = [];
    for (let i = 0; i < maxLen; i++) {
      const row = [];
      for (let j = 0; j < newArr.length; j++) {
        row.push(newArr[j][i] ?? 0);
      }
      transposed.push(row);
    }
    arr = transposed;
  }

 
  arr = arr.slice(0, 100).map(row => row.slice(0, 100));

  answer++;
}

console.log(found ? answer : -1);
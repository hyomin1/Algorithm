const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = input.slice(1).map((line) => Number(line));

const answer1 = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
const res1 = Math.round(answer1);
if (res1 === -0) console.log(0);
else {
  console.log(res1);
}

const mid = Math.floor(arr.length / 2);
const sortedArr = [...arr].sort((a, b) => a - b);
console.log(sortedArr[mid]); // 중앙 값

const res = [];
const min = sortedArr[0];
const max = sortedArr[sortedArr.length - 1];

const obj = {};
for (let i = 0; i < sortedArr.length; i++) {
  obj[sortedArr[i]] = (obj[sortedArr[i]] || 0) + 1;
}

const maxCount = Math.max(...Object.values(obj));

for (const key of Object.keys(obj)) {
  if (obj[key] === maxCount) {
    res.push(key);
  }
}

const sortedRes = [...res].map(Number).sort((a, b) => a - b);

if (sortedRes.length === 1) {
  console.log(sortedRes[0]);
} else if (sortedRes.length > 1) {
  console.log(sortedRes[1]);
}

console.log(max - min);

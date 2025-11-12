const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const words = input.slice(1);

const weight = {};

for (const word of words) {
  let w = 1;
  for (let i = word.length - 1; i >= 0; i--) {
    if (!weight[word[i]]) weight[word[i]] = 0;
    weight[word[i]] += w;
    w *= 10;
  }
}
const keys = Object.keys(weight).sort((a, b) => weight[b] - weight[a]);
let num = 9;
const obj = {};
for (const key of keys) {
  obj[key] = num--;
}
const res = [];
for (const word of words) {
  let num = '';
  for (const ch of word) {
    num += obj[ch];
  }
  res.push(num);
}
const answer = res.map((v) => Number(v)).reduce((acc, cur) => acc + cur, 0);

console.log(answer);

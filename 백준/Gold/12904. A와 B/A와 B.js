const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const S = input[0];
let T = input[1];

// 1. A를 추가
// 2. 문자열 뒤집고 B 추가

// 역추적방법

while (T.length > S.length) {
  if (T[T.length - 1] === 'A') {
    T = T.slice(0, -1);
  } else {
    T = T.slice(0, -1).split('').reverse().join('');
  }
}

console.log(S === T ? 1 : 0);

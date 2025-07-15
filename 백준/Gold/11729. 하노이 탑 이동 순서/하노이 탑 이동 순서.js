const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const res = [];
function hanoi(n, from, to, via) {
  if (n === 1) {
    res.push(`${from} ${to}`);
    return;
  }
  hanoi(n - 1, from, via, to); // N-1개를 보조 기둥으로 옮기는 과정
  res.push(`${from} ${to}`); // 가장 큰 원판 목표 기둥으로
  hanoi(n - 1, via, to, from); // N-1개 원판을 다시 보조 기둥에서 목표 기둥으로
}

hanoi(N, 1, 3, 2);
console.log(res.length);
console.log(res.join('\n'));

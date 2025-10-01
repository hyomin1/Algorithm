const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);

const names = input.slice(1);

const lenCount = Array(21).fill(0);

let answer = 0;

for (let i = 0; i < N; i++) {
  const len = names[i].length;

  if (i > K) {
    const noFriend = names[i - K - 1].length;
    lenCount[noFriend]--;
  }

  answer += lenCount[len];
  lenCount[len]++;
}
console.log(answer);

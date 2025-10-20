const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const M = Number(input[1]);

const broken = input[2] ? input[2].split(' ').map(Number) : [];
let answer = Math.abs(100 - N);

function canMake(channel) {
  const str = channel + '';

  for (const num of str) {
    if (broken.includes(Number(num))) return false;
  }
  return true;
}

for (let i = 0; i <= 1000000; i++) {
  if (canMake(i)) {
    const numPress = `${i}`.length;
    const movePress = Math.abs(N - i);
    const total = numPress + movePress;

    answer = Math.min(answer, total);
  }
}

console.log(answer);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

if (N <= M) {
  console.log(N);
  process.exit(0);
}

let left = 0;
let right = Math.max(...arr) * N;

function getPerson(time) {
  let total = 0;
  for (const element of arr) {
    total += Math.floor(time / element) + 1;
  }
  return total;
}

let time = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (getPerson(mid) < N) {
    left = mid + 1;
  } else {
    time = mid;
    right = mid - 1;
  }
}

let count = getPerson(time - 1);

for (let i = 0; i < M; i++) {
  if (time % arr[i] === 0) {
    count++;
    if (count === N) {
      console.log(i + 1);
      break;
    }
  }
}

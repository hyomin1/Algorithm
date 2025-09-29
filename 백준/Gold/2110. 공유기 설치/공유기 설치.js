const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, C] = input[0].split(' ').map(Number);
const home = [];
for (let i = 1; i <= N; i++) {
  home.push(Number(input[i]));
}
home.sort((a, b) => a - b);

let left = 1;
let right = home[home.length - 1] - home[0];

function canInstall(distance) {
  let count = 1;
  let last = home[0];

  for (let i = 1; i < home.length; i++) {
    if (home[i] - last >= distance) {
      count++;
      last = home[i];
    }
  }
  return count >= C;
}

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (canInstall(mid)) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(answer);

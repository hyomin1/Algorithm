const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

const plug = [];
let answer = 0;
for (let i = 0; i < K; i++) {
  const now = arr[i];

  if (plug.includes(now)) continue; // 이미 꽂혀 있음

  if (plug.length < N) {
    plug.push(now);
    continue;
  }

  let remove = -1;
  let max = -1;
  for (const p of plug) {
    let next = Infinity;
    for (let j = i + 1; j < K; j++) {
      if (arr[j] === p) {
        next = j;
        break;
      }
    }
    if (next === Infinity) {
      remove = p;
      break;
    }

    if (next > max) {
      max = next;
      remove = p;
    }
  }

  const index = plug.indexOf(remove);
  plug.splice(index, 1);
  plug.push(now);
  answer++;
}
console.log(answer);

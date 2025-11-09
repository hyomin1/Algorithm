const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, L] = input[0].split(' ').map(Number);
const board = input.slice(1).map((l) => l.split(' ').map(Number));

let answer = 0;

function check(arr) {
  const used = Array(arr.length).fill(false);
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];

    if (diff === 0) continue;
    else if (diff === 1) {
      // 오르막
      const start = i - L + 1;
      if (start < 0) return false;

      for (let j = start; j <= i; j++) {
        if (arr[j] !== arr[i] || used[j]) return false;
        used[j] = true;
      }
    } else if (diff === -1) {
      // 내리막
      const end = i + L;
      if (end >= N) return false;
      for (let j = i + 1; j <= end; j++) {
        if (arr[j] !== arr[i + 1] || used[j]) return false;
        used[j] = true;
      }
    } else return false;
  }
  return true;
}

for (let i = 0; i < board.length; i++) {
  if (check(board[i])) answer++;

  const col = board.map((row) => row[i]);

  if (check(col)) answer++;
}
console.log(answer);

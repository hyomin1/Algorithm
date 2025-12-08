const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((v) => v.split(' ').map(Number));

function calculate(x, y, d1, d2) {
  const person = [0, 0, 0, 0, 0];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const value = board[r][c];
      let area = 0;

      if (r < x + d1 && c <= y && r + c < x + y) {
        area = 1;
      } else if (r <= x + d2 && c > y && r - c < x - y) {
        area = 2;
      } else if (r >= x + d1 && c < y - d1 + d2 && r - c > x - y + 2 * d1) {
        area = 3;
      } else if (r > x + d2 && c >= y - d1 + d2 && r + c > x + y + 2 * d2) {
        area = 4;
      } else {
        area = 5;
      }

      person[area - 1] += value;
    }
  }

  return Math.max(...person) - Math.min(...person);
}

let answer = Infinity;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    for (let d1 = 1; d1 < N; d1++) {
      for (let d2 = 1; d2 < N; d2++) {
        if (x + d1 + d2 >= N) continue;
        if (y - d1 < 0) continue;
        if (y + d2 >= N) continue;

        const diff = calculate(x, y, d1, d2);
        answer = Math.min(answer, diff);
      }
    }
  }
}
console.log(answer);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split(' ').map(Number));
const tetromino = [
  // 1. O
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],

  // 2. I
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],

  // 3. S / Z
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
  [
    [1, 0],
    [0, 1],
    [1, 1],
    [0, 2],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],

  // 4. L (8가지)
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
  ],
  [
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
  ],

  // 5. T (4가지)
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
];
let answer = -Infinity;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (const shape of tetromino) {
      let sum = 0;
      for (const [dy, dx] of shape) {
        const ny = dy + i;
        const nx = dx + j;
        if (ny < 0 || ny >= N || nx < 0 || nx >= M) break;
        sum += board[ny][nx];
      }
      answer = Math.max(answer, sum);
    }
  }
}
console.log(answer);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((l) => l.split(' ').map(Number));
const dirs = [
  [0, 1], // 동
  [0, -1], // 서
  [1, 0], // 남
  [-1, 0], // 북
];

const cctv = {
  1: [[0], [1], [2], [3]],
  2: [
    [0, 1],
    [2, 3],
  ],
  3: [
    [0, 3],
    [0, 2],
    [1, 2],
    [1, 3],
  ],
  4: [
    [0, 1, 3],
    [0, 2, 3],
    [0, 1, 2],
    [1, 2, 3],
  ],
  5: [[0, 1, 2, 3]],
};

const cctvList = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] >= 1 && board[i][j] <= 5) {
      cctvList.push([i, j, board[i][j]]);
    }
  }
}

function watch(y, x, index) {
  const [dy, dx] = dirs[index];
  let nx = dx + x;
  let ny = dy + y;
  const watched = [];
  while (ny >= 0 && ny < N && nx >= 0 && nx < M) {
    if (board[ny][nx] === 6) {
      // 벽 만남
      break;
    }

    if (board[ny][nx] === 0) {
      watched.push([ny, nx]);
      board[ny][nx] = -1;
    }
    ny += dy;
    nx += dx;
  }
  return watched;
}
let answer = Infinity;
function dfs(depth) {
  if (depth === cctvList.length) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === 0) count++;
      }
    }
    answer = Math.min(answer, count);
    return;
  }

  const [y, x, num] = cctvList[depth];

  for (const rotation of cctv[num]) {
    const marked = [];

    for (const dir of rotation) {
      const watched = watch(y, x, dir);
      marked.push(...watched);
    }
    dfs(depth + 1);
    for (const [ny, nx] of marked) {
      board[ny][nx] = 0;
    }
  }
}

dfs(0);
console.log(answer);

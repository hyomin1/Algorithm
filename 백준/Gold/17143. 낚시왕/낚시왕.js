const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [R, C, M] = input[0].split(' ').map(Number);
// M: 상어의 수
const board = Array.from({ length: R }, () =>
  Array.from({ length: C }, () => [])
);
const info = input.slice(1).map((v) => v.split(' ').map(Number));

const sharks = {};
for (let i = 0; i < info.length; i++) {
  const [r, c, s, d, z] = info[i];
  board[r - 1][c - 1].push(i + 1);
  // s: 속력 d: 이동 방향 z: 크기
  sharks[i + 1] = { y: r - 1, x: c - 1, s, d, z, isLive: true };
}

const dirs = {
  1: [-1, 0],
  2: [1, 0],
  3: [0, 1],
  4: [0, -1],
};

let col = 0;
let answer = 0;

while (col < C) {
  // 잡아 먹을 상어 찾기, 이 경우 무조건 상어는 칸에 1개만 존재
  for (let row = 0; row < R; row++) {
    if (board[row][col].length > 0) {
      const eat = board[row][col].pop();
      sharks[eat].isLive = false;
      answer += sharks[eat].z;
      break;
    }
  }
  const newBoard = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => [])
  );
  // 상어 이동
  for (let i = 1; i <= M; i++) {
    if (!sharks[i].isLive) continue;
    // s: 속력 d: 이동 방향 z: 크기

    let { y, x, s, d, z } = sharks[i];

    if (d === 1 || d === 2) s %= (R - 1) * 2;
    else s %= (C - 1) * 2;

    for (let j = 0; j < s; j++) {
      let [dy, dx] = dirs[d];
      y += dy;
      x += dx;
      if (y < 0 || y >= R || x < 0 || x >= C) {
        y -= dy;
        x -= dx;
        d = d === 1 ? 2 : d === 2 ? 1 : d === 3 ? 4 : 3;
        y += dirs[d][0];
        x += dirs[d][1];
      }
    }

    sharks[i].y = y;
    sharks[i].x = x;
    sharks[i].d = d;
    newBoard[y][x].push(i);
  }

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (newBoard[r][c].length > 1) {
        let max = newBoard[r][c][0];
        for (const num of newBoard[r][c]) {
          if (sharks[num].z > sharks[max].z) max = num;
        }
        for (const num of newBoard[r][c]) {
          if (num !== max) sharks[num].isLive = false;
        }
        newBoard[r][c] = [max];
      }
    }
  }

  for (let r = 0; r < R; r++) board[r] = newBoard[r];

  col++;
}

console.log(answer);

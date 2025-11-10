const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);

const chess = input.slice(1, 1 + N).map((v) => v.split(' ').map(Number));
const board = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => [])
);

const info = input.slice(1 + N).map((v) => v.split(' ').map(Number));

// 1: 우측 2 : 좌측 3: 상 4: 하
const dirs = {
  1: [0, 1],
  2: [0, -1],
  3: [-1, 0],
  4: [1, 0],
};

const horse = {};

for (let i = 0; i < info.length; i++) {
  const [y, x, dir] = info[i];
  horse[i + 1] = { y: y - 1, x: x - 1, dir };
  board[y - 1][x - 1].push(i + 1);
}

for (let turn = 1; turn <= 1000; turn++) {
  for (let num = 1; num <= K; num++) {
    const { y, x, dir } = horse[num];

    const stack = board[y][x];
    const index = stack.indexOf(num);
    const moving = stack.splice(index); // 해당 번호 포함 위쪽 말들

    const [dy, dx] = dirs[dir];
    let ny = dy + y;
    let nx = dx + x;

    if (ny < 0 || ny >= N || nx < 0 || nx >= N || chess[ny][nx] === 2) {
      // 이동하려는 칸이 벗어나는 경우 또는 파란색인 경우
      horse[num].dir = dir === 1 ? 2 : dir === 2 ? 1 : dir === 3 ? 4 : 3;
      const d = horse[num].dir;
      ny = y + dirs[d][0];
      nx = x + dirs[d][1];

      if (ny < 0 || ny >= N || nx < 0 || nx >= N || chess[ny][nx] === 2) {
        board[y][x].push(...moving);
        continue;
      }
    }
    if (chess[ny][nx] === 1) moving.reverse();
    board[ny][nx].push(...moving);

    for (const m of moving) {
      horse[m].y = ny;
      horse[m].x = nx;
    }

    if (board[ny][nx].length >= 4) {
      console.log(turn);
      process.exit(0);
    }
  }
}

console.log(-1);

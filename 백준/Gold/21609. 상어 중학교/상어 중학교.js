const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((v) => v.split(' ').map(Number));

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function findGroup() {
  const groups = [];

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (board[y][x] <= 0) continue;

      const color = board[y][x];
      const visited = Array.from({ length: N }, () => Array(N).fill(false));
      visited[y][x] = true;
      const queue = [[y, x]];
      const group = [[y, x]];

      let rainbow = 0;
      const normal = [[y, x]];

      while (queue.length) {
        const [y, x] = queue.shift();

        for (const [dy, dx] of dirs) {
          const ny = dy + y;
          const nx = dx + x;
          if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
          // 검정 블록인 경우
          if (visited[ny][nx] || board[ny][nx] === -1) continue;
          if (board[ny][nx] !== 0 && board[ny][nx] !== color) continue;

          visited[ny][nx] = true;
          queue.push([ny, nx]);
          group.push([ny, nx]);

          if (board[ny][nx] === 0) rainbow++;
          else normal.push([ny, nx]);
        }
      }

      // 블록 그룹의 블록 2개 이상
      if (group.length < 2) continue;

      normal.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
      });

      groups.push({
        blocks: group,
        size: group.length,
        rainbow,
        standard: normal[0],
      });
    }
  }
  if (groups.length === 0) return null;

  groups.sort((a, b) => {
    // 1. 크기 가장 큰 거
    if (a.size !== b.size) return b.size - a.size;
    // 2. 무지개 블록 수
    if (a.rainbow !== b.rainbow) return b.rainbow - a.rainbow;
    // 3. 행이 가장 큰것
    if (a.standard[0] !== b.standard[0]) return b.standard[0] - a.standard[0];
    // 4. 열이 가장 큰 것
    return b.standard[1] - a.standard[1];
  });

  return groups[0];
}

function gravity() {
  for (let x = 0; x < N; x++) {
    for (let y = N - 2; y >= 0; y--) {
      if (board[y][x] < 0) continue;

      let ny = y;
      while (true) {
        if (ny + 1 >= N) break;
        // 빈칸일때만
        if (board[ny + 1][x] !== -2) break;

        board[ny + 1][x] = board[ny][x];
        board[ny][x] = -2;
        ny++;
      }
    }
  }
}

function rotate() {
  // 반시계 0번째행 0번째 열
  const copy = Array.from({ length: N }, () => Array(N).fill(0));
  // 0,0 -> 2,0 0,1 => 1,0  0,2 -> 0,0
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      copy[N - x - 1][y] = board[y][x];
    }
  }

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      board[y][x] = copy[y][x];
    }
  }
}

let answer = 0;

while (true) {
  const group = findGroup();

  if (!group) break;
  const { blocks, size } = group;

  answer += size ** 2;

  for (const [y, x] of blocks) {
    board[y][x] = -2; // 블록 제거
  }
  gravity();
  rotate();
  gravity();
}

console.log(answer);

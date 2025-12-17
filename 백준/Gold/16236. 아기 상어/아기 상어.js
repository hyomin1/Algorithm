const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((v) => v.split(' ').map(Number));

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let time = 0;

const shark = {
  y: 0,
  x: 0,
  size: 2,
  eat: 0,
};
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (board[y][x] === 9) {
      shark.y = y;
      shark.x = x;
      board[y][x] = 0;
    }
  }
}

function bfs(y, x) {
  const queue = [[y, x, 0]];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[y][x] = true;
  const candidates = [];
  let min = Infinity;
  while (queue.length) {
    const [y, x, dist] = queue.shift();

    if (dist > min) break;

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (ny < 0 || ny >= N || nx < 0 || nx >= N || visited[ny][nx]) continue;

      if (board[ny][nx] > shark.size) continue;

      visited[ny][nx] = true;
      queue.push([ny, nx, dist + 1]);
      if (board[ny][nx] > 0 && board[ny][nx] < shark.size) {
        min = dist + 1;
        candidates.push({ y: ny, x: nx, dist: dist + 1 });
      }
    }
  }

  // 잡아먹을거 없는 경우
  if (candidates.length === 0) return null;

  candidates.sort((a, b) => {
    if (a.dist !== b.dist) return a.dist - b.dist;
    if (a.y !== b.y) return a.y - b.y;
    return a.x - b.x;
  });

  return candidates[0];
}

while (true) {
  const fish = bfs(shark.y, shark.x);
  if (!fish) break;

  const { y, x, dist } = fish;

  shark.y = y;
  shark.x = x;
  time += dist;

  board[y][x] = 0;
  shark.eat++;
  if (shark.eat === shark.size) {
    shark.size++;
    shark.eat = 0;
  }
}

console.log(time);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M, T] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split(' ').map(Number));

let answer = Infinity;

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

// 1. 그람먹기전 최단루트 + 그람 먹은 후 구한 루트(벽뚫기 가능) 구하기
const visited = Array(N)
  .fill()
  .map(() => Array(M).fill(-1));
visited[0][0] = 0;
const queue = [[0, 0]];

let gram = null;

while (queue.length) {
  const [y, x] = queue.shift();
  if (board[y][x] === 2) {
    // 그람 발견

    gram = [y, x];
  }

  for (let d = 0; d < 4; d++) {
    const ny = dy[d] + y;
    const nx = dx[d] + x;
    if (
      ny >= 0 &&
      ny < N &&
      nx >= 0 &&
      nx < M &&
      board[ny][nx] !== 1 &&
      visited[ny][nx] === -1
    ) {
      visited[ny][nx] = visited[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
}
let res1 = Infinity;
if (gram !== null) {
  // 그람 구한 이후로는 벽뚫기 가능 -> 맨해튼 거리
  res1 = visited[gram[0]][gram[1]];
  res1 += Math.abs(gram[0] - (N - 1)) + Math.abs(gram[1] - (M - 1));
}
// 2. 그람 없이 최단루트 가기
const queue3 = [[0, 0]];
const visited2 = Array(N)
  .fill()
  .map(() => Array(M).fill(-1));
visited2[0][0] = 0;

while (queue3.length) {
  const [y, x] = queue3.shift();
  if (y === N - 1 && x === M - 1) {
    break;
  }
  for (let i = 0; i < 4; i++) {
    const ny = dy[i] + y;
    const nx = dx[i] + x;
    if (
      ny >= 0 &&
      ny < N &&
      nx >= 0 &&
      nx < M &&
      visited2[ny][nx] === -1 &&
      board[ny][nx] === 0
    ) {
      visited2[ny][nx] = visited2[y][x] + 1;
      queue3.push([ny, nx]);
    }
  }
}
// 3. 두개 최솟값 비교 후 더 작은 수, 둘다 T시간 넘으면 FAIL

const res2 = visited2[N - 1][M - 1];

const valid = [];
if (res1 !== Infinity && res1 > 0) valid.push(res1);
if (res2 !== -1) valid.push(res2);

if (valid.length === 0) {
  answer = 'Fail';
} else {
  answer = Math.min(...valid);
  answer = answer <= T ? answer : 'Fail';
}

console.log(answer);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = input.slice(1).map((line) => line.split(' ').map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const empty = [];
const virus = [];

// 빈칸 및 바이러스 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) empty.push([i, j]);
    if (map[i][j] === 2) virus.push([i, j]);
  }
}

let answer = -Infinity;

function spreadVirus(copy) {
  const queue = [...virus];
  while (queue.length) {
    const [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && copy[ny][nx] === 0) {
        copy[ny][nx] = 2;
        queue.push([ny, nx]);
      }
    }
  }
}

function countSafe(copy) {
  let count = 0;
  for (const element of copy) {
    for (const element2 of element) {
      if (element2 === 0) count++;
    }
  }
  return count;
}

function dfs(start, selected) {
  if (selected.length === 3) {
    const copy = map.map((row) => [...row]);
    for (const [y, x] of selected) {
      copy[y][x] = 1;
    }
    spreadVirus(copy);
    const safe = countSafe(copy);
    answer = Math.max(safe, answer);
    return;
  }
  for (let i = start; i < empty.length; i++) {
    dfs(i + 1, [...selected, empty[i]]);
  }
}
dfs(0, []);
console.log(answer);

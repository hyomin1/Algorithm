const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split('').map(Number));

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => new Uint8Array(K + 1))
);

const MAX_STATES = N * M * (K + 1);
const q = new Int32Array(MAX_STATES * 3);
let head = 0, tail = 0;


q[tail++] = 0; 
q[tail++] = 0; 
q[tail++] = 0; 
visited[0][0][0] = 1;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let dist = 1;
while (head < tail) {
  const levelSize = (tail - head) / 3; 
  for (let s = 0; s < levelSize; s++) {
    const y = q[head++];
    const x = q[head++];
    const broken = q[head++];

    if (y === N - 1 && x === M - 1) {
      console.log(dist);
      return;
    }

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];
      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;

 
      if (board[ny][nx] === 0 && !visited[ny][nx][broken]) {
        visited[ny][nx][broken] = 1;
        q[tail++] = ny;
        q[tail++] = nx;
        q[tail++] = broken;
      }
  
      else if (board[ny][nx] === 1 && broken < K && !visited[ny][nx][broken + 1]) {
        visited[ny][nx][broken + 1] = 1;
        q[tail++] = ny;
        q[tail++] = nx;
        q[tail++] = broken + 1;
      }
    }
  }
  dist++;
}

console.log(-1);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);

const board = [];

const visited = Array(R)
  .fill()
  .map(() => Array(C).fill(false));

for (let i = 1; i <= R; i++) {
  board.push(input[i].trim().split(''));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
function isValidMove(x, y) {
  return (
    x >= 0 && y >= 0 && x < C && y < R && board[y][x] !== '#' && !visited[y][x]
  );
}
let wolf = 0;
let sheep = 0;

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (!visited[i][j] && board[i][j] !== '#') {
      let wc = 0; // 울타리 안 늑대
      let sc = 0; // 울타리 안 양
      const queue = [[i, j]];
      while (queue.length > 0) {
        const [y, x] = queue.shift();
        if (board[y][x] === 'v') wc++;
        else if (board[y][x] === 'o') sc++;
        visited[y][x] = true;
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + x;
          const ny = dy[k] + y;

          if (!isValidMove(nx, ny)) continue;
          queue.push([ny, nx]);
          visited[ny][nx] = true;
        }
      }
      if (sc > wc) sheep += sc;
      else wolf += wc;
    }
  }
}
console.log(sheep, wolf);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);
const board = input.slice(2).map((line) => line.split(' ').map(Number));

//북쪽 y감소 , 서쪽 x 감소, 동쪽 x증가, 남쪽 y증가
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let answer = 0;

while (true) {
  if (board[r][c] === 0) {
    // 청소 안된 경우 청소
    board[r][c] = -1; // 청소
    answer++;
  }

  let moved = false;
  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4;
    // 주변 4칸중 청소되지 않는 빈칸인 경우
    const nx = c + dx[d];
    const ny = r + dy[d];
    if (nx >= 0 && nx < M && ny >= 0 && ny < N && board[ny][nx] === 0) {
      r = ny;
      c = nx;
      moved = true;
      break;
    }
  }

  if (!moved) {
    const back = (d + 2) % 4; // 후진
    const nx = dx[back] + c;
    const ny = dy[back] + r;
    if (nx >= 0 && nx < M && ny >= 0 && ny < N && board[ny][nx] !== 1) {
      r = ny;
      c = nx;
    } else {
      break;
    }
  }
}
console.log(answer);

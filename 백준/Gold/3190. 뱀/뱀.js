const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const K = parseInt(input[1]);

const board = Array(N)
  .fill()
  .map(() => Array(N).fill(0));
const apples = input
  .slice(2, 2 + K)
  .map((line) => line.split(' ').map((n) => Number(n) - 1));
for (const [y, x] of apples) {
  board[y][x] = 1;
}
const L = parseInt(input[2 + K]);

const direction = input.slice(3 + K).map((line) => {
  const [time, dir] = line.split(' ');
  return [Number(time), dir];
});

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

let d = 0; // 최초 오른쪽
let index = 0;
let answer = 0;

const snake = [[0, 0]]; // 앞이 머리 뒤 꼬리

while (true) {
  answer++;
  const [headY, headX] = snake[0];
  const ny = dy[d] + headY;
  const nx = dx[d] + headX;

  if (
    ny < 0 ||
    ny >= N ||
    nx < 0 ||
    nx >= N ||
    snake.some(([y, x]) => y === ny && x === nx)
  ) {
    // 벽 or 자기 몸에 부딪힌 경우
    break;
  }
  snake.unshift([ny, nx]); //  머리를 다음칸에 위치

  if (board[ny][nx] === 1) {
    // 사과 있는 경우
    board[ny][nx] = 0;
  } else {
    snake.pop();
  }

  if (index < direction.length && direction[index][0] === answer) {
    const turn = direction[index++][1]; // 시간초 맞을때 방향전환
    d = turn === 'D' ? (d + 1) % 4 : (d + 3) % 4;
  }
}
console.log(answer);

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
const board = input.map((v) => v.trim().split(" "));

const rows = board.length;
const cols = board[0].length;
function isValidMove(x, y) {
  return x >= 0 && y >= 0 && y < rows && x < cols;
}

function dfs(num, depth, x, y) {
  if (depth === 5) {
    set.add(num);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (!isValidMove(nx, ny)) continue;
    dfs(num + board[ny][nx], depth + 1, nx, ny);
  }
}
const set = new Set();
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    dfs(board[i][j], 0, j, i);
  }
}
console.log(set.size);

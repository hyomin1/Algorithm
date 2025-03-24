const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const n = parseInt(input[0]);
const arr = input.slice(1).map((v) => v.split(" ").map((d) => Number(d)));
const visited = Array(n)
  .fill()
  .map(() => Array(n).fill(false));

let arrived = false;
function dfs(y, x) {
  if (y == n - 1 && x === n - 1) {
    arrived = true;
    return;
  }
  if (x < 0 || y < 0 || x >= n || y >= n || visited[y][x]) return;
  visited[y][x] = true;
  const jump = arr[y][x];

  dfs(y + jump, x); // 아래 점프
  dfs(y, x + jump); // 오른쪽 점프
}

dfs(0, 0);
let answer = "";
answer = arrived ? "HaruHaru" : "Hing";
console.log(answer);

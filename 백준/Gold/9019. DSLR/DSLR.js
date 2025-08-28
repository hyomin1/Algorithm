const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const visited = Array.from({ length: 10000 }).fill(false);
  const queue = [[start, ""]];

  while (queue.length) {
    const [num, path] = queue.shift();
    if (num === end) {
      console.log(path);
      break;
    }

    let d = (num * 2) % 10000;
    if (!visited[d]) {
      visited[d] = true;
      queue.push([d, path + "D"]);
    }

    let s = num - 1;
    if (num === 0) {
      s = 9999;
    }
    if (!visited[s]) {
      visited[s] = true;
      queue.push([s, path + "S"]);
    }

    let l = (num % 1000) * 10 + Math.floor(num / 1000);
    if (!visited[l]) {
      visited[l] = true;
      queue.push([l, path + "L"]);
    }
    let r = Math.floor(num / 10) + (num % 10) * 1000;
    if (!visited[r]) {
      visited[r] = true;
      queue.push([r, path + "R"]);
    }
  }
}

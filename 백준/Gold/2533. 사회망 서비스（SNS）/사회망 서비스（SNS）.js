const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const graph = Array.from({ length: N + 1 }, () => []);

const info = input.slice(1).map((v) => v.split(' ').map(Number));

for (const [u, v] of info) {
  graph[u].push(v);
  graph[v].push(u);
}

const dp = Array.from({ length: N + 1 }, () => [0, 0]);

// 내가 얼리어답터 아니면 내 친구는 전부 얼리어답터
// 내가 얼리어답터면 친구는 상관 x

const visited = Array.from({ length: N + 1 }).fill(false);

function dfs(node) {
  visited[node] = true;

  dp[node][0] = 0; // 얼리어답터 X
  dp[node][1] = 1; // 얼리어답터

  for (const next of graph[node]) {
    if (visited[next]) continue;

    dfs(next);

    dp[node][1] += Math.min(dp[next][0], dp[next][1]); // 얼리어답터면 상관 X
    dp[node][0] += dp[next][1]; // 얼리어답터 아니라면 친구는 무조건 얼리어답터여야한다.
  }
}

dfs(1);

console.log(Math.min(dp[1][0], dp[1][1]));

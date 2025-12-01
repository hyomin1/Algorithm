const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const W = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(2 ** N).fill(-1));

function dfs(node, visited) {
  // 모든 비트가 1111... -> 다 방문한 경우
  if (visited === (1 << N) - 1) {
    if (W[node][0] === 0) {
      return Infinity;
    }
    return W[node][0];
  }

  if (dp[node][visited] !== -1) {
    return dp[node][visited];
  }

  let min = Infinity;

  for (let next = 0; next < N; next++) {
    if (visited & (1 << next)) continue;
    if (W[node][next] === 0) continue;

    const cost = W[node][next] + dfs(next, visited | (1 << next));
    min = Math.min(min, cost);
  }

  dp[node][visited] = min;

  return min;
}

const answer = dfs(0, 1 << 0);
console.log(answer);

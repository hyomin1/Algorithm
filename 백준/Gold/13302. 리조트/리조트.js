const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const closed = new Set();
if (M > 0) {
  input[1].split(' ').forEach((v) => closed.add(Number(v)));
}

const max = 40;

const dp = Array.from({ length: N + 6 }, () => Array(max + 1).fill(Infinity));

dp[1][0] = 0;

for (let day = 1; day <= N; day++) {
  for (let coupon = 0; coupon <= max; coupon++) {
    if (dp[day][coupon] === Infinity) continue;

    if (closed.has(day)) {
      dp[day + 1][coupon] = Math.min(dp[day + 1][coupon], dp[day][coupon]);
      continue;
    }

    dp[day + 1][coupon] = Math.min(
      dp[day + 1][coupon],
      dp[day][coupon] + 10000
    );

    dp[day + 3][coupon + 1] = Math.min(
      dp[day + 3][coupon + 1],
      dp[day][coupon] + 25000
    );

    dp[day + 5][coupon + 2] = Math.min(
      dp[day + 5][coupon + 2],
      dp[day][coupon] + 37000
    );

    if (coupon >= 3) {
      dp[day + 1][coupon - 3] = Math.min(
        dp[day + 1][coupon - 3],
        dp[day][coupon]
      );
    }
  }
}

let answer = Infinity;
for (let c = 0; c <= max; c++) {
  answer = Math.min(answer, dp[N + 1][c]);
}

console.log(answer.toString());

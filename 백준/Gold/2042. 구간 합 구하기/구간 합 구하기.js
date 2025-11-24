const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

const arr = input.slice(1, N + 1).map(BigInt);
const cmd = input.slice(N + 1).map((v) => v.split(' ').map(BigInt));

const tree = Array.from({ length: 4 * N }).fill(0n);

function init(node, start, end) {
  if (start === end) {
    tree[node] = arr[start];
    return tree[node];
  }

  const mid = Math.floor((start + end) / 2);

  tree[node] = init(node * 2, start, mid) + init(node * 2 + 1, mid + 1, end);
  return tree[node];
}

init(1, 0, N - 1);

function getSum(node, start, end, left, right) {
  if (right < start || end < left) return 0n;

  if (left <= start && end <= right) {
    return tree[node];
  }

  const mid = Math.floor((start + end) / 2);
  return (
    getSum(node * 2, start, mid, left, right) +
    getSum(node * 2 + 1, mid + 1, end, left, right)
  );
}

function update(node, start, end, index, diff) {
  if (index < start || index > end) return;

  tree[node] += diff;

  if (start !== end) {
    const mid = Math.floor((start + end) / 2);
    update(node * 2, start, mid, index, diff);
    update(node * 2 + 1, mid + 1, end, index, diff);
  }
}
const answer = [];
for (const [a, b, c] of cmd) {
  if (a === 1n) {
    // 수 바꾸기
    const index = b - 1n;
    const diff = c - arr[index];
    arr[index] = c;
    update(1, 0, N - 1, index, diff);
  } else if (a === 2n) {
    // 합 구하기

    const left = b - 1n;
    const right = c - 1n;
    const res = getSum(1, 0, N - 1, left, right);
    answer.push(res.toString());
  }
}

console.log(answer.join('\n'));

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

const tree = Array.from({ length: 4 * N }).fill(1n);

const MOD = 1000000007n;

function init(node, start, end) {
  if (start === end) {
    tree[node] = arr[start] % MOD;
    return tree[node];
  }

  const mid = Math.floor((start + end) / 2);

  tree[node] =
    (init(node * 2, start, mid) * init(node * 2 + 1, mid + 1, end)) % MOD;
  return tree[node];
}

function update(node, start, end, index, newValue) {
  if (index < start || index > end) return;

  if (start === end) {
    tree[node] = newValue % MOD;
    return;
  }

  const mid = Math.floor((start + end) / 2);
  update(node * 2, start, mid, index, newValue);
  update(node * 2 + 1, mid + 1, end, index, newValue);

  tree[node] = (tree[node * 2] * tree[node * 2 + 1]) % MOD;
}

function query(node, start, end, left, right) {
  if (right < start || left > end) return 1n;

  if (left <= start && end <= right) {
    return tree[node];
  }
  const mid = Math.floor((start + end) / 2);

  return (
    (query(node * 2, start, mid, left, right) *
      query(node * 2 + 1, mid + 1, end, left, right)) %
    MOD
  );
}
const answer = [];
init(1, 0, N - 1);
for (const [a, b, c] of cmd) {
  if (a === 1n) {
    const index = b - 1n;
    arr[index] = c;
    update(1, 0, N - 1, index, c);
  } else if (a === 2n) {
    const left = b - 1n;
    const right = c - 1n;
    const res = query(1, 0, N - 1, left, right);
    answer.push(res.toString());
  }
}
console.log(answer.join('\n'));

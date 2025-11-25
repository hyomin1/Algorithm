const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const tree = Array.from({ length: 4 * N }).fill(Infinity);

const arr = input.slice(1, N + 1).map(Number);

const info = input.slice(N + 1).map((v) => v.split(' ').map(Number));

function init(node, start, end) {
  if (start === end) {
    tree[node] = arr[start];
    return tree[node];
  }

  const mid = Math.floor((start + end) / 2);
  tree[node] = Math.min(
    init(node * 2, start, mid),
    init(node * 2 + 1, mid + 1, end)
  );
  return tree[node];
}

init(1, 0, N - 1);

function query(node, start, end, left, right) {
  if (right < start || left > end) return Infinity;

  if (left <= start && end <= right) {
    return tree[node];
  }

  const mid = Math.floor((start + end) / 2);
  return Math.min(
    query(node * 2, start, mid, left, right),
    query(node * 2 + 1, mid + 1, end, left, right)
  );
}
const answer = [];
for (const [a, b] of info) {
  const left = a - 1;
  const right = b - 1;
  answer.push(query(1, 0, N - 1, left, right));
}
console.log(answer.join('\n'));

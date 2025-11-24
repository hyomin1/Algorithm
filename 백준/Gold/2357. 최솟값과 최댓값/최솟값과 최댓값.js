const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1).map(Number);

const info = input.slice(N + 1).map((v) => v.split(' ').map(Number));

const maxTree = Array.from({ length: N * 4 }).fill(-Infinity);
const minTree = Array.from({ length: N * 4 }).fill(Infinity);

function initMax(node, start, end) {
  if (start === end) {
    maxTree[node] = arr[start];
    return maxTree[node];
  }
  const mid = Math.floor((start + end) / 2);
  maxTree[node] = Math.max(
    initMax(node * 2, start, mid),
    initMax(node * 2 + 1, mid + 1, end)
  );

  return maxTree[node];
}
function initMin(node, start, end) {
  if (start === end) {
    minTree[node] = arr[start];
    return minTree[node];
  }
  const mid = Math.floor((start + end) / 2);
  minTree[node] = Math.min(
    initMin(node * 2, start, mid),
    initMin(node * 2 + 1, mid + 1, end)
  );

  return minTree[node];
}

function maxQuery(node, start, end, left, right) {
  if (right < start || end < left) return -Infinity;

  if (left <= start && end <= right) {
    return maxTree[node];
  }
  const mid = Math.floor((start + end) / 2);

  return Math.max(
    maxQuery(node * 2, start, mid, left, right),
    maxQuery(node * 2 + 1, mid + 1, end, left, right)
  );
}
function minQuery(node, start, end, left, right) {
  if (right < start || end < left) return Infinity;

  if (left <= start && end <= right) {
    return minTree[node];
  }
  const mid = Math.floor((start + end) / 2);
  return Math.min(
    minQuery(node * 2, start, mid, left, right),
    minQuery(node * 2 + 1, mid + 1, end, left, right)
  );
}
initMax(1, 0, N - 1);
initMin(1, 0, N - 1);
const answer = [];
for (const [a, b] of info) {
  const left = a - 1;
  const right = b - 1;
  const max = maxQuery(1, 0, N - 1, left, right);
  const min = minQuery(1, 0, N - 1, left, right);
  answer.push(`${min} ${max}`);
}
console.log(answer.join('\n'));

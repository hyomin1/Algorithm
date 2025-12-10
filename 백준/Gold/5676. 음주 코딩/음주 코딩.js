const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

// 100 -100 계속 곱하면 에러

let idx = 0;

while (idx < input.length) {
  const [N, K] = input[idx++].split(' ').map(Number);

  if (!N || !K) break;

  const arr = input[idx++].split(' ').map((v) => (v > 0 ? 1 : v < 0 ? -1 : 0));

  const tree = Array.from({ length: 4 * N }).fill(1);

  function init(node, start, end) {
    if (start === end) {
      tree[node] = arr[start];
      return tree[node];
    }
    const mid = Math.floor((start + end) / 2);

    tree[node] = init(node * 2, start, mid) * init(node * 2 + 1, mid + 1, end);
    return tree[node];
  }

  function update(node, start, end, index, newValue) {
    if (index < start || index > end) return;

    if (start === end) {
      tree[node] = newValue;
      return;
    }

    const mid = Math.floor((start + end) / 2);
    update(node * 2, start, mid, index, newValue);
    update(node * 2 + 1, mid + 1, end, index, newValue);

    tree[node] = tree[node * 2] * tree[node * 2 + 1];
  }

  function query(node, start, end, left, right) {
    if (right < start || left > end) return 1;

    if (left <= start && end <= right) return tree[node];

    const mid = Math.floor((start + end) / 2);

    return (
      query(node * 2, start, mid, left, right) *
      query(node * 2 + 1, mid + 1, end, left, right)
    );
  }
  init(1, 0, N - 1);

  let answer = '';

  for (let k = 0; k < K; k++) {
    const [cmd, a, b] = input[idx++].split(' ');

    if (cmd === 'C') {
      const index = Number(a) - 1;
      const value = Number(b) > 0 ? 1 : Number(b) < 0 ? -1 : 0;
      arr[index] = value;
      update(1, 0, N - 1, index, value);
    } else if (cmd === 'P') {
      const res = query(1, 0, N - 1, Number(a) - 1, Number(b) - 1);

      if (res === 0) answer += '0';
      else if (res < 0) answer += '-';
      else answer += '+';
    }
  }
  console.log(answer);
}

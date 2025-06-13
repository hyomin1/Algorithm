const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

let idx = 1;
for (let i = 0; i < N; i++) {
  const [, index] = input[idx++].split(' ').map(Number);
  const arr = input[idx++].split(' ').map(Number);

  const queue = arr.map((p, i) => ({ p, i }));
  let answer = 0;
  while (queue.length) {
    const cur = queue.shift();
    const morePriority = queue.some((q) => cur.p < q.p);

    if (morePriority) {
      queue.push(cur);
    } else {
      answer++;
      if (cur.i === index) {
        console.log(answer);
        break;
      }
    }
  }
}

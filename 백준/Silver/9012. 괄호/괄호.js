const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  const str = input[i];

  const stack = [];
  let isRight = true;
  for (const s of str) {
    if (s === '(') stack.push(s);
    else {
      if (stack.length === 0) {
        isRight = false;
        break;
      }
      stack.pop();
    }
  }
  if (stack.length > 0) isRight = false;
  const answer = isRight ? 'YES' : 'NO';
  console.log(answer);
}

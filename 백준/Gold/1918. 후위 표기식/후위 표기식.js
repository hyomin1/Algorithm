const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const str = input[0];
const stack = [];

function getPriority(op) {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
}

const res = [];
for (let i = 0; i < str.length; i++) {
  const ch = str[i];
  if (ch >= 'A' && ch <= 'Z') {
    res.push(ch);
  } else if (ch === '(') stack.push(ch);
  else if (ch === ')') {
    while (stack[stack.length - 1] !== '(') {
      res.push(stack.pop());
    }
    stack.pop();
  } else {
    while (
      stack.length > 0 &&
      stack[stack.length - 1] !== '(' &&
      getPriority(stack[stack.length - 1]) >= getPriority(ch)
    ) {
      res.push(stack.pop());
    }
    stack.push(ch);
  }
}

while (stack.length !== 0) {
  res.push(stack.pop());
}
console.log(res.join(''));

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const str = input[0];
const bomb = input[1];
const stack = [];

for (const ch of str) {
  stack.push(ch);

  if (stack.length >= bomb.length) {
    let isFound = true;
    for (let i = 0; i < bomb.length; i++) {
      if (stack[stack.length - bomb.length + i] !== bomb[i]) {
        isFound = false;
        break;
      }
    }

    if (isFound) {
      for (const element of bomb) {
        stack.pop();
      }
    }
  }
}
console.log(stack.length === 0 ? 'FRULA' : stack.join(''));

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = [1, 2, 3];

function dfs(path) {
  if (path.length === N) {
    console.log(path.join(''));
    process.exit(0);
  }

  for (let i = 0; i < arr.length; i++) {
    const cur = [...path, arr[i]];
    let found = false;
    const len = cur.length;
    for (let j = 1; j <= Math.floor(len / 2); j++) {
      const p1 = cur.slice(len - j).join('');
      const p2 = cur.slice(len - 2 * j, len - j).join('');
      if (p1 === p2) {
        found = true;
        break;
      }
    }
    if (!found) dfs(cur);
  }
}

dfs([]);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const words = input.slice(1);

const res = [];
function dfs(path, arr, set) {
  if (path.length === arr.length) {
    res.push(path.join(''));

    return;
  }
  const used = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(i) && !used.has(arr[i])) {
      used.add(arr[i]);
      set.add(i);
      dfs([...path, arr[i]], arr, set);
      set.delete(i);
    }
  }
}

for (const word of words) {
  const set = new Set();

  const sorted = word.split('').sort();
  dfs([], sorted, set);
}
console.log(res.join('\n'));

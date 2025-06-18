const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const eggs = [];

for (let i = 1; i <= N; i++) {
  const [s, w] = input[i].split(' ').map(Number);
  eggs.push({ s, w });
}

let max = 0;
function dfs(cur) {
  if (cur === N) {
    const broken = eggs.filter((egg) => egg.s <= 0).length;
    max = Math.max(max, broken);
    return;
  }
  if (eggs[cur].s <= 0) {
    dfs(cur + 1);
    return;
  }

  let notFound = false;

  for (let i = 0; i < N; i++) {
    if (i === cur || eggs[i].s <= 0) continue;
    notFound = true;
    eggs[cur].s -= eggs[i].w;
    eggs[i].s -= eggs[cur].w;

    dfs(cur + 1);

    eggs[cur].s += eggs[i].w;
    eggs[i].s += eggs[cur].w;
  }
  if (!notFound) dfs(cur + 1);
}
dfs(0);
console.log(max);

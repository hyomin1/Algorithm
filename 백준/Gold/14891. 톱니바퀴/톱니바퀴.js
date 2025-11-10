const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const gear = input.slice(0, 4);
const K = Number(input[4]);
const cmd = input.slice(5).map((l) => l.split(' ').map(Number));

const queue = [];

for (const [num, dir] of cmd) {
  queue.push([num - 1, dir, true, true]);

  while (queue.length) {
    const [gearNum, dir, isPrev, isNext] = queue.shift();

    const prev = gearNum - 1;
    const next = gearNum + 1;
    if (prev >= 0 && isPrev && gear[gearNum][6] !== gear[prev][2]) {
      queue.push([prev, -dir, true, false]);
    }
    if (next < 4 && isNext && gear[gearNum][2] !== gear[next][6]) {
      queue.push([next, -dir, false, true]);
    }

    if (dir === 1) {
      // 시계 방향 회전
      const cur = gear[gearNum];
      const newGear = cur.slice(-1) + cur.slice(0, -1);
      gear[gearNum] = newGear;
    } else if (dir === -1) {
      // 반시계 방향 회전
      const cur = gear[gearNum];
      const newGear = cur.slice(1) + cur.slice(0, 1);
      gear[gearNum] = newGear;
    }
  }
}

// 기어 12시 방향
const res = gear.map((v) => Number(v[0]));
let answer = 0;
for (let i = 0; i < res.length; i++) {
  answer += 2 ** i * res[i];
}
console.log(answer);

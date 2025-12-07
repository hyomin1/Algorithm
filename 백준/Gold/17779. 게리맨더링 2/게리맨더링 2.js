const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((v) => v.split(' ').map(Number));

function calculate(x, y, d1, d2) {
  const person = [0, 0, 0, 0, 0]; // 1, 2, 3, 4, 5번 선거구 인구

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const value = board[r][c];
      let area = 0;

      // 1. 5번 영역 경계선 위의 점 확인
      if (
        // 경계 1: (x, y) -> (x+d1, y-d1)
        (r >= x && r <= x + d1 && c === y - (r - x)) ||
        // 경계 2: (x, y) -> (x+d2, y+d2)
        (r >= x && r <= x + d2 && c === y + (r - x)) ||
        // 경계 3: (x+d1, y-d1) -> (x+d1+d2, y-d1+d2)
        (r >= x + d1 && r <= x + d1 + d2 && c === y - d1 + (r - (x + d1))) ||
        // 경계 4: (x+d2, y+d2) -> (x+d1+d2, y-d1+d2)
        (r >= x + d2 && r <= x + d1 + d2 && c === y + d2 - (r - (x + d2)))
      ) {
        area = 5;
      }
      // 2. 1~4번 영역 조건 (5번 경계에 닿지 않도록 조건 추가)
      else if (r < x + d1 && c <= y && r + c < x + y) {
        // 1번 선거구: r < x+d1, c <= y, (경계 2 바깥)
        area = 1;
      } else if (r <= x + d2 && c > y && r - c < x - y) {
        // 2번 선거구: r <= x+d2, c > y, (경계 1 바깥)
        area = 2;
      } else if (r >= x + d1 && c < y - d1 + d2 && r - c > x - y + 2 * d1) {
        // 3번 선거구: r >= x+d1, c < y-d1+d2, (경계 4 바깥)
        // Note: The conditional logic for r-c can be tricky based on coordinate system.
        // A simpler way for 3 and 4: use the r+c < x+y+2d2 (3) and r-c > x-y-2d1 (4) conditions derived from line equations.
        area = 3;
      } else if (r > x + d2 && c >= y - d1 + d2 && r + c > x + y + 2 * d2) {
        // 4번 선거구: r > x+d2, c >= y-d1+d2, (경계 3 바깥)
        area = 4;
      }
      // 3. 1~4번 영역 조건에 모두 해당하지 않으면, 5번 영역 내부!
      else {
        area = 5;
      }

      // 인덱스는 0~4이므로, area-1을 사용합니다.
      person[area - 1] += value;
    }
  }

  return Math.max(...person) - Math.min(...person);
}

let answer = Infinity;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    for (let d1 = 1; d1 < N; d1++) {
      for (let d2 = 1; d2 < N; d2++) {
        if (x + d1 + d2 >= N) continue;
        if (y - d1 < 0) continue;
        if (y + d2 >= N) continue;

        const diff = calculate(x, y, d1, d2);
        answer = Math.min(answer, diff);
      }
    }
  }
}
console.log(answer);

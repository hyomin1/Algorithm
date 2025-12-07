const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const MAP = input.map((v) => v.split(' ').map(Number));

let answer = Infinity;
for (let x = 1; x + 2 <= N; x++) {
        for (let y = 1; y <= N; y++) {
                for (let d1 = 1; y - d1 > 0; d1++) {
                        for (let d2 = 1; y + d2 <= N; d2++) {
                                if (x + d1 + d2 > N) continue;

                                let temp = Array.from(Array(N), () => Array(N).fill(-1));
                                //좌상
                                for (let i = x, j = y; i <= x + d1 && j >= y - d1; i++, j--) {
                                        temp[i - 1][j - 1] = 5;
                                }

                                //우상
                                for (let i = x, j = y; i <= x + d2 && j <= y + d2; i++, j++) {
                                        temp[i - 1][j - 1] = 5;
                                }

                                //좌하
                                for (let i = x + d1, j = y - d1; i <= x + d1 + d2 && j <= y - d1 + d2; i++, j++) {
                                        temp[i - 1][j - 1] = 5;
                                }

                                //우하
                                for (let i = x + d2, j = y + d2; i <= x + d2 + d1 && j >= y + d2 - d1; i++, j--) {
                                        temp[i - 1][j - 1] = 5;
                                }

                                let p = [0, 0, 0, 0, 0];

                                //1번
                                for (let i = 1; i < x + d1; i++) {
                                        for (let j = 1; j <= y; j++) {
                                                if (temp[i - 1][j - 1] == 5) {
                                                        break;
                                                }
                                                temp[i - 1][j - 1] = 0;
                                                p[0] += MAP[i - 1][j - 1];
                                        }
                                }

                                //2번
                                for (let i = 1; i <= x + d2; i++) {
                                        for (let j = N; j > y; j--) {
                                                if (temp[i - 1][j - 1] == 5) {
                                                        break;
                                                }
                                                temp[i - 1][j - 1] = 1;
                                                p[1] += MAP[i - 1][j - 1];
                                        }
                                }

                                //3번
                                for (let i = x + d1; i <= N; i++) {
                                        for (let j = 1; j < y - d1 + d2; j++) {
                                                if (temp[i - 1][j - 1] == 5) {
                                                        break;
                                                }
                                                temp[i - 1][j - 1] = 2;
                                                p[2] += MAP[i - 1][j - 1];
                                        }
                                }

                                //4번
                                for (let i = x + d2 + 1; i <= N; i++) {
                                        for (let j = N; j >= y - d1 + d2; j--) {
                                                if (temp[i - 1][j - 1] == 5) {
                                                        break;
                                                }
                                                temp[i - 1][j - 1] = 3;
                                                p[3] += MAP[i - 1][j - 1];
                                        }
                                }

                                // 5번
                                for (let i = 1; i <= N; i++) {
                                        for (let j = 1; j <= N; j++) {
                                                if (temp[i - 1][j - 1] == -1 || temp[i - 1][j - 1] == 5) {
                                                        temp[i - 1][j - 1] = 4;
                                                        p[4] += MAP[i - 1][j - 1];
                                                }
                                        }
                                }

                                const MAX = Math.max(...p);
                                const MIN = Math.min(...p);
                                answer = answer > MAX - MIN ? MAX - MIN : answer;
                        }
                }
        }
}

console.log(answer);

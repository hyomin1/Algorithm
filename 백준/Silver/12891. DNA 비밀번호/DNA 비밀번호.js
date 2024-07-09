const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [S, P] = input[0].split(" ").map(Number);

const DNA = input[1];
const checkPw = input[2].split(" ").map(Number);
// A C G T : 2 0 1 1

let check = 0;
let answer = 0;
// 0이면 이미 만족하기 때문에 check 증가
for (let i = 0; i < checkPw.length; i++) {
  if (checkPw[i] === 0) check++;
}
const pw = [0, 0, 0, 0];

//초기 문자열 체크
for (let i = 0; i < P; i++) {
  add(DNA[i]);
}
if (check === 4) answer++;

for (let i = P; i < S; i++) {
  add(DNA[i]);
  remove(DNA[i - P]);
  if (check === 4) answer++;
}
console.log(answer);
function add(str) {
  switch (str) {
    case "A":
      pw[0]++;
      if (pw[0] === checkPw[0]) check++;
      break;
    case "C":
      pw[1]++;
      if (pw[1] === checkPw[1]) check++;
      break;
    case "G":
      pw[2]++;
      if (pw[2] === checkPw[2]) check++;
      break;
    case "T":
      pw[3]++;
      if (pw[3] === checkPw[3]) check++;
      break;
  }
}

function remove(str) {
  switch (str) {
    case "A":
      if (pw[0] === checkPw[0]) check--;
      pw[0]--;
      break;
    case "C":
      if (pw[1] === checkPw[1]) check--;
      pw[1]--;
      break;
    case "G":
      if (pw[2] === checkPw[2]) check--;
      pw[2]--;
      break;
    case "T":
      if (pw[3] === checkPw[3]) check--;
      pw[3]--;
      break;
  }
}

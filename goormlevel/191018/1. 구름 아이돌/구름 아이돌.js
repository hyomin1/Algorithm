// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N, first = true, num;
	for await (const line of rl) {
		if(first) {
			N = line;
			first = false;
		}
		else {
			num = line.split(' ').map(Number);
			newNum = line.split(' ').map(Number);
		}
	}
	rl.close();
  newNum.sort((a,b) => b-a);
	let answer = [];
	for(let i = 0; i < 3; i++) {
		for(let j = 0; j < N; j++) {
			if(newNum[i] === num[j]) {
				answer.push(j+1);
			}
		}
	}
	console.log(answer.join(" "));
	process.exit();
})();

// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N, str, first = true;
	for await (const line of rl) {
		if(first) {
			N= line;
			first = false;
		}
		else str = line;
		
	}
	rl.close();
	let score = 1;
	let answer = 0;
	if(str[0] === "O") answer += score;
	
	for(let i = 1; i < N; i++) {
		if(str[i] === "O") {
			if(str[i-1] === "O") {
				score +=1;
				answer += score;
			}
			else {
				answer += score;
			}
		}
		else {
			score = 1;
		}
	}
	console.log(answer);
	process.exit();
})();

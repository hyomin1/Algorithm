// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let first = true;
	let N;
	const arr = [];
	for await (const line of rl) {
		if(first) {
			N = line;
			first = false;
		}
		else {
			arr.push(line.split(' '));
		}
		//rl.close();
	}
	rl.close();
	let money = 0;
	answer = "fail";
	for(let i = 0; i < N; i++) {
		c = arr[i][0];
		v = parseInt(arr[i][1]);
		if(c === "in") money += v;
		else {
			money -= v;
		}
		if(money < 0) {
			break;
		}
	}
	if(money >= 0) answer = "success";
	console.log(answer);
	
	process.exit();
})();

// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N, K, str, first = true;
	for await (const line of rl) {
		if(first) {
			let arr = line.split(' ').map(Number);
			N = arr[0], K = arr[1];
			first = false;
		}
		else {
			str = line;
		}
	}
	rl.close();
	let answer = "";
	for(let i = 0; i < N; i++) {
		let n = parseInt(str[i]);
		let sum = (n + K).toString();
		answer += sum;
		
	}
	console.log(answer);
	process.exit();
})();

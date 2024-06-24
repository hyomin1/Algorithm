// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let N = Number(line);
		let answer = 1;
		for(let i = N; i >=1; i--) {
			answer *= i;
			answer %= 1000000007;
		}
		console.log(answer);
		rl.close();
	}
	
	process.exit();
})();

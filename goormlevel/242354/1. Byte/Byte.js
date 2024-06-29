// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let answer;
	for await (const line of rl) {
		answer = line.length;
		rl.close();
	}
	console.log(answer);
	
	process.exit();
})();

// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N, first = true, arr;
	for await (const line of rl) {
		if(first) {
			N = parseInt(line);
			first = false;
		}
		else {
			arr = line.split(' ').map(Number);
		}
	}
	rl.close();
	let answer = 0;
	arr.forEach((v) => answer += v);
	console.log(answer);
	process.exit();
})();

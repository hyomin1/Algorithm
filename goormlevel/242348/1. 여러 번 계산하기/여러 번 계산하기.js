// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N, arr = [], first = true;
	for await (const line of rl) {
		if(first) {
			N = line;
			first = false;
		}
		else {
			arr.push(line.split(' ').map(Number));
		}
	}
	rl.close();
	let answer = 0;

	arr.forEach((v) => console.log(v[0] + v[1]));
	
	process.exit();
})();

// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N;
	const arr = [];
	let first = true;
	
	for await (const line of rl) {
		if(first) {
			N = line;
			first = false;
		}
		else arr.push(line.split(' ').map(Number));
	}
	rl.close();
	for (let i = 0; i < N; i++) {
		a = arr[i][0];
		b = arr[i][1];
		if(a < b) console.log("Sunflower");
		else if(a == b) console.log("Tulip");
		else console.log("Rose");
	}
	process.exit();
})();

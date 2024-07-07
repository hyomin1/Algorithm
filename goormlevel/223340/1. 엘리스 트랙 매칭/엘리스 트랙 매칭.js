// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let first = true, N, arr = [];
	for await (const line of rl) {
		if(first) {
			N = parseInt(line);
			first = false;
		} else {
			arr.push(line);
		}
		
	}
	let tracks = arr[0].split(' ');
	let answer = 0;
	tracks.forEach((v) => {
		if(v === arr[1]) answer++;
	})
	console.log(answer);
	
	process.exit();
})();

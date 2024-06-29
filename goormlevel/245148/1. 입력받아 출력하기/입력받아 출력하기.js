// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let first = true;
	let N;
	let arr;
	for await (const line of rl) {
		if(first) {
			N = line;
			first = false;
		}
		else {
			arr = line.split(' ');
		}
		
	}
	rl.close();
	const answer = [];
	for(let i = 1; i <= N; i++) {
		const str = [];
		for(let j = 1; j <= N; j++) {
			if(i*j % 2 == 0) str.push(arr[1]);
			else str.push(arr[0]);
		}
		answer.push(str);
	}
	answer.forEach((v) => console.log(v.join(' ')));
	process.exit();
})();

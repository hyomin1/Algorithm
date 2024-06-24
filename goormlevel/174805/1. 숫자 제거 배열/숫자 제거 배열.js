const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let lines = [];
r1.on('line',(line) => {
	lines.push(line);
})

r1.on('close', () => {
	let [N,K] = lines[0].split(" ");
	const numbers = lines[1].split(" ");
		let count = 0;
		N = Number(N);
		for(let i = 0; i < N; i++) {
			if(!numbers[i].includes(K)) count++;
		}
		console.log(count);
	
	
})
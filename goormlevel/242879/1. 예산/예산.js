// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let first = true;
	const arr = [];
	let N , budget;
	for await (const line of rl) {
		if(first) {
			let v = line.split(' ');
			N = v[0];
			budget = v[1];
			first = false;
		}
		else {
			arr.push(line);
		}
		
		rl.close();
	}
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		const a = arr[i].split(' ').map(Number);
		sum += a[0] * a[1];
	}
	if(sum <= budget) console.log(budget-sum);
	else console.log("No");
	
	process.exit();
})();

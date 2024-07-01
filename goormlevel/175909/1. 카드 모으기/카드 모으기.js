// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N,M,a, first = true;
	let count = 1;
	let arr=[];
	for await (const line of rl) {
		if(first) {
			a = line.split(' ').map(Number);
			N = a[0], M = a[1];
			first = false;
		}
		else {
			arr.push(parseInt(line));
		}
	}
	rl.close();
	let set = new Set();
	let sum = 0;
	for(let i = 1; i <= N; i++) {
		sum += i;
	}
	for(let i = 0; i < M; i++) {
		if(!set.has(arr[i])) {
			set.add(arr[i]);
			sum -= arr[i];
		}
		if(sum == 0) {
			break;
		}
		count++;
	}
	if(sum != 0) count = -1;
	console.log(count);
	
	
	process.exit();
})();

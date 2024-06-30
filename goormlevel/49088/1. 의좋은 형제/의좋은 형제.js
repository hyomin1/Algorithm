// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr, N, first = true;
	for await (const line of rl) {
		if(first) {
			arr = line.split(' ').map(Number);
			first = false;
		}
		else {
			N = line;
		}
	}
	rl.close();
	
	for(let i = 0; i < N; i++) {
		if(i % 2 == 0) { //진우가 주는 날
			if(arr[0] % 2 == 0) {
				let n = arr[0] / 2;
				arr[0] -= n;
				arr[1] += n;
			}
			else {
				let n = parseInt(arr[0]/2) + 1;
				arr[0] -= n;
				arr[1] += n;
			}
		}
		else { // 선우가 주는 날
			if(arr[1] % 2 == 0) {
				let n = arr[1] / 2;
				arr[1] -= n;
				arr[0] += n;
			}
			else {
				let n = parseInt(arr[1]/2) + 1;
				arr[1] -= n;
				arr[0] += n;
			}
		}
		
	}
	console.log(arr.join(" "));
	
	process.exit();
})();

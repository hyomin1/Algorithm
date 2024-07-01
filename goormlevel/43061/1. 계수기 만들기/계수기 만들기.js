// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let lineNum = 1;
let N, A, B, K;
rl.on("line", function(line) {
	switch(lineNum) {
		case 1:
			N = parseInt(line);
			break;
		case 2:
			A = line.split(' ').map(Number);
			break;
		case 3:
			B = line.split(' ').map(Number);
			break;
		case 4:
			K = parseInt(line);
			rl.close();
			break;
	}
	lineNum++;
	
}).on("close", function() {
	let lastIndex = N-1;
	for(let i = 0; i < K; i++) {
		B[lastIndex]++;
		if(B[lastIndex] > A[lastIndex]) {
			B[lastIndex] = 0;
			B[lastIndex - 1]++;
		}
		for(let j = lastIndex - 1; j > 0 ; j--) {
			if(B[j] > A[j]) {
				B[j] = 0;
				B[j-1]++;
			}
		}
		if(B[0] > A[0]) B[0] = 0;
		
	}
	console.log(B.join(''));
	process.exit();
});
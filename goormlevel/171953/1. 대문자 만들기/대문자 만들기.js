// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N, word, first = true;
	for await (const line of rl) {
		if(first) {
			N = line;
			first = false;
		}
		else {
			word = line;
		}
		rl.close();
	}
	console.log(word.toUpperCase());
	
	process.exit();
})();

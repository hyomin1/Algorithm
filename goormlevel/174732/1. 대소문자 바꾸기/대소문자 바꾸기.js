// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const lines = [];
	for await (const line of rl) {
		
		lines.push(line);
		
		rl.close();
	}
	let answer = "";
	for(let i = 0; i < lines[0]; i++) {
		let c = lines[1].charAt(i);
		if(c >= 'a' && c <= 'z') {
			answer += c.toUpperCase();
		}
		else {
			answer += c.toLowerCase();
		}
		
	}	
	console.log(answer);
	
	process.exit();
})();

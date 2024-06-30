// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let r,c;
	for await (const line of rl) {
		let arr = line.split(' ').map(Number);
		r = arr[0], c = arr[1];
	}
	rl.close();
	const snakes = [];
	let dir = "r", s = 0, e = c-1;
	for(let i = 0; i < r; i++) {
		let str = "";
		if(i % 2 === 0) {
			for(let j = 0; j < c; j++) {
				str += "#";
			}
		}
		else {
			if(dir === "r") {
				for(let j = 0; j < c-1; j++) str += ".";
				str += "#";
				dir = "l";
			}
			else {
				str += "#";
				for(let j = 1; j < c; j++) str += ".";
				dir = "r";
			}
		}
		
					
		snakes.push(str);
	}
	snakes.forEach((v) => console.log(v));
	process.exit();
})();

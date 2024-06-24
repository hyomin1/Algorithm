// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	var arr = [];
	arr = line.split(" ");
	var count = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].length >= 1) {
			count++;
		}
	}
	console.log(count);
	rl.close();
}).on("close", function() {
	process.exit();
});
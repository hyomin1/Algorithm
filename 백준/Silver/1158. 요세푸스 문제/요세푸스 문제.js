const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

class Queue {
  items = [];
  rear = 0;
  front = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  pop() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }
}
const [N, K] = input[0].split(" ").map(Number);

const queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let answer = [];
while (queue.size() > 0) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.pop());
  }

  answer.push(queue.pop());
}
answer = answer.join(", ");
console.log(`<${answer}>`);

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = input.slice(1).map((line) => {
  const [age, name] = line.split(' ');
  return { age: parseInt(age), name };
});

arr.sort((a, b) => a.age - b.age);

arr.forEach((item) => console.log(item.age, item.name));

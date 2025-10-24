const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const words = input.slice(1);

function checkPalindrome(word) {
  let l = 0;
  let r = word.length - 1;
  while (l < r) {
    if (word[l] !== word[r]) {
      const removeLeft = isPalindrome(word, l + 1, r);
      const removeRight = isPalindrome(word, l, r - 1);

      if (removeLeft || removeRight) return 1;
      return 2;
    }
    l++;
    r--;
  }
  return 0;
}

function isPalindrome(word, l, r) {
  while (l < r) {
    if (word[l] !== word[r]) return false;
    l++;
    r--;
  }
  return true;
}

for (const word of words) {
  console.log(checkPalindrome(word));
}

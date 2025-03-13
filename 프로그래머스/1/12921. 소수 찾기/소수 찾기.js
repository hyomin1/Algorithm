// 에라토스테네스의 체

function countPrime(n) {
    let nums = [];
    let count = 0;
    for (let i = 2; i <= n; i++) {
        nums[i] = i;
    }
    for (let i = 2; i <= n; i++) {
        if (nums[i] === 0) continue;
        for (let j = 2 * i; j <= n; j += i) {
            nums[j] = 0;
        }
    }
    
    for (let i = 2; i <= n; i++) {
        if (nums[i] !== 0) count++;
    }
    return count;
    
}

function solution(n) {
    var answer = 0;
    answer = countPrime(n);
    return answer;
}
function isPrime(num) {
    num = Number(num);
    if (num <= 1) return false;
    const sq = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sq; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    var answer = 0;
    const set = new Set();
    const visited = new Set();
    function dfs(num,depth) {
        if (isPrime(num)) {
            set.add(Number(num));
        }
        if (depth === numbers.length) return;
        for (let i = 0; i < numbers.length; i++) {
            if(!visited.has(i)) {
                visited.add(i);
                dfs(num + numbers[i],depth + 1);
                visited.delete(i);
            }
        }
    }
    dfs('',0);
    answer = set.size;
    return answer;
}
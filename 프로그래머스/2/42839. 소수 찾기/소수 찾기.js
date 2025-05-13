function isPrime(num) {
    if (num < 2) return false;
    const sq = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sq; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    var answer = 0;
    
    const visited = new Set();
    const set = new Set();
    
    function dfs(cur,depth) {
        cur = Number(cur);
        if (isPrime(cur)) set.add(cur);
        
        if (depth === numbers.length) return;
        for (let i = 0; i < numbers.length; i++) {
            if (!visited.has(i)) {
                visited.add(i);
                dfs(cur + numbers[i],depth+1);
                visited.delete(i);
            }
        }
    }
    dfs('',0);
    answer = set.size;
    return answer;
}
function isPrime(n) {
    if (n < 2) return false;
    const sq = Math.floor(Math.sqrt(n));
    for (let i = 2 ; i <= sq; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    var answer = 0;
    const visited = [];
    const set = new Set();
    function dfs(cur) {
        const num = Number(cur);
        if (isPrime(num)) set.add(num);
        for (let i = 0; i < numbers.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                dfs(num + numbers[i]);
                visited[i] = false;
            }
        }
    }
    dfs("")
    return set.size;
}
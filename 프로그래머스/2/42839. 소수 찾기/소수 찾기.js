function isPrime(num) {
    if (num < 2) return false;
    const sq = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= sq; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function dfs(number, depth, numbers, set, visited) {
    if (isPrime(Number(number))) set.add(Number(number));
    for (let i = 0; i < numbers.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            dfs(number + numbers[i], depth+1, numbers, set, visited);
            visited[i] = false;
        }
    }
}

function solution(numbers) {
    var answer = 0;
    const set = new Set();
    const visited = Array(numbers.length).fill(false);
    dfs("",0,numbers,set,visited);
    return set.size;
}
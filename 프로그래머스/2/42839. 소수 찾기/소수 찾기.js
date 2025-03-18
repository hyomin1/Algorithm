function isPrime(n) {
    if (n < 2) return false;
    const sq = Math.floor(Math.sqrt(n));
    for(let i = 2; i <= sq; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    var answer = 0;
    const nums = numbers.split('');
    const visited = new Array(nums.length).fill(false);
    const set = new Set();
    
    dfs(nums, visited, '', set);
    return set.size;
}

function dfs(nums, visited, curNum, set) {
    const num = Number(curNum);
    if (num > 0 && isPrime(num)) set.add(num);
    
    for (let i = 0; i < nums.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            dfs(nums,visited,curNum + nums[i],set);
            visited[i] = false;
        }
    }
}
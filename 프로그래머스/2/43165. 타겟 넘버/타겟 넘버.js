function dfs(index ,sum, numbers, target) {
    if(index === numbers.length) {
        return sum === target ? 1 : 0;
    }
    
    return dfs(index + 1, sum + numbers[index], numbers,target) +
        dfs(index + 1, sum - numbers[index], numbers, target);
}

function solution(numbers, target) {
    return dfs(0,0,numbers,target)
}


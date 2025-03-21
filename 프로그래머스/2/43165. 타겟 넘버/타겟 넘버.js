function dfs(depth,current,numbers,target) {
    if (depth === numbers.length) {
        return current === target ? 1 : 0;
    }
    return dfs(depth+1,current + numbers[depth],numbers,target) + dfs(depth+1, current - numbers[depth],numbers,target);
    
    
}

function solution(numbers, target) {
    var answer = 0;
    answer = dfs(0,0,numbers,target);
    return answer;
}
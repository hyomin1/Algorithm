function solution(numbers, target) {
    var answer = 0;
    function dfs(depth,cur) {
        if (depth === numbers.length) {
            return cur === target ? 1 : 0;
        }
        return dfs(depth + 1, cur + numbers[depth]) + dfs(depth + 1, cur - numbers[depth]);
    }
    answer = dfs(0,0,numbers,target);
    return answer;
}
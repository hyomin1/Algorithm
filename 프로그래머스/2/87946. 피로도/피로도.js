
function solution(k, dungeons) {
    let answer = 0;
    const visited = [];
    
    function dfs(cur, depth) {
        answer = Math.max(answer,depth);
        for (let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && cur >= dungeons[i][0]) {
                visited[i] = true;
                dfs(cur - dungeons[i][1], depth + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k,0)
    
    return answer;
}
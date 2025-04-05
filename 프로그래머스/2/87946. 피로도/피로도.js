function dfs(curK, cnt, dungeons, visited) {
    let max = cnt;
    for (let i = 0; i < dungeons.length; i++) {
        if (curK >= dungeons[i][0] && !visited.has(i)) {
            visited.add(i);
            max = Math.max(max, dfs(curK - dungeons[i][1], cnt + 1 ,dungeons, visited))
            visited.delete(i);
        }
    }
    return max;
}

function solution(k, dungeons) {
    var answer = 0;
    const visited = new Set();
    answer = dfs(k,0,dungeons,visited);
    return answer;
}
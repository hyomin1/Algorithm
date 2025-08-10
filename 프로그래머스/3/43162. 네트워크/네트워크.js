function solution(n, computers) {
    var answer = 0;
    const graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < computers[i].length; j++) {
            if (i !== j && computers[i][j] === 1) {
                graph[i].push(j);

            }
        }
    }
const visited = Array.from({length:n}).fill(false);

    function dfs(node) {
        if(visited[node]) return;
        visited[node] = true;
        
        for (const next of graph[node]) {
            if(!visited[next]) {
                dfs(next);
            }
        }
        
        
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}
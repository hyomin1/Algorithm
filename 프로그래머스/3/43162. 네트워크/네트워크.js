function solution(n, computers) {
    var answer = 0;
    const graph = {};
    for (let i = 0; i < computers.length; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < computers[i].length; j++) {
            if (i !== j && computers[i][j] === 1) {
                graph[i].push(j);
            }
        }
    }
    const visited = new Array(n).fill(false);
    
    for (let i = 0; i < n; i++) {
        if(!visited[i]) {
            visited[i] = true;
            answer++;
            dfs(i,visited,graph);
        }
    }
    
    return answer;
}

function dfs(node,visited,graph) {
    visited[node] = true;
    
    for (const n of graph[node]) {
        if(!visited[n]) dfs(n,visited,graph);
    }
}


function solution(n, computers) {
    var answer = 0;
    const adjList = {};
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
        for (let j = 0; j < n; j++) {
            if(i !== j && computers[i][j] === 1) {
                adjList[i].push(j);
            }
        }
    }
    const visited = new Set();
    function dfs(node) {
        visited.add(node);
        
        for (const neighbor of adjList[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                dfs(neighbor);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}
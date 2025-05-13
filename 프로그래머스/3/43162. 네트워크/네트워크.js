function solution(n, computers) {
    var answer = 0;
    const graph = {};
    const visited = new Set();
    
    function dfs(node) {
        visited.add(node);
        for (const next of graph[node]) {
            if(!visited.has(next)) {
                dfs(next);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < computers[i].length; j++) {
            if (i === j) continue;
            if (computers[i][j] === 1) {
                graph[i].push(j);
            }
        }
        
    }
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}
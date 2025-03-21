function dfs(node, graph, visited) {
    visited[node] = true;
    let count = 1;
    for (const next of graph[node]) {
        if (!visited[next]) {
            visited[next] = true;
            count += dfs(next, graph, visited);
        }
    }
    return count;
}

function solution(n, wires) {
    var answer = Infinity;
    const graph = {};
    
    for (let i = 0; i < wires.length; i++) {
        for (let j = 1; j <= n; j++) {
            graph[j] = [];
        }
        for (let j = 0; j < wires.length; j++) {
            if (i !== j) {
                const [n1, n2] = wires[j];
                graph[n1].push(n2);
                graph[n2].push(n1);
            }
        }
        const visited = Array(n+1).fill(false);
        const first = dfs(1,graph,visited);
        const second = n - first;
        answer = Math.min(answer,Math.abs(first-second));
        
    }
    return answer;
}
function dfs(node, graph, visited) {
    visited.add(node);
    let count = 1;
    for(const neighbor of graph[node] || []) {
        if(!visited.has(neighbor)) {
            visited.add(neighbor);
            count += dfs(neighbor,graph,visited);
        }
    }
    return count;
}

function solution(n, wires) {
    var answer = Infinity;
    
    
    for (let i = 0; i < wires.length; i++) {
        const visited = new Set();
        const graph = {};
        for (let j = 1; j <= n; j++) graph[j] = [];
        for (let j = 0; j < wires.length; j++) {
            if (i === j) continue;
            const [u,v] = wires[j];
            graph[u].push(v);
            graph[v].push(u);
        }
         const first = dfs(1,graph,visited);
            const second = n - first;
            answer = Math.min(answer, Math.abs(first-second));

    }
    return answer;
}
function dfs(node,graph,visited) {
    visited[node] = true;
    let count = 1;
    for (const n of graph[node]) {
        if(!visited[n]) {
            visited[n] = true;
            count += dfs(n,graph,visited);
        }
    }
    return count;
}

function solution(n, wires) {
    let answer = Infinity;
    for (let i = 0; i < wires.length; i++) {
        const graph = {};
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
        const diff = Math.abs(first - second);
        answer = Math.min(diff,answer);
    }
    return answer;
}

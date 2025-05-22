function solution(n, edge) {
    var answer = 0;
    const distance = Array(n+1).fill(0);
    const visited = Array(n+1).fill(false);
    const graph = {};
    
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    for (const [u,v] of edge) {
        graph[u].push(v);
        graph[v].push(u);
    }
    visited[1] = true;
    const queue = [1];
    while(queue.length) {
        const cur = queue.shift();
        for (const next of graph[cur]) {
            if(!visited[next]) {
                visited[next] = true;
                queue.push(next);
                distance[next] = distance[cur] + 1;
            }
        }
    }
    const max = Math.max(...distance);
    answer = distance.filter((v) => v === max).length;
    return answer;
}
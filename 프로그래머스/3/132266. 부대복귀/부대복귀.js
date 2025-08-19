function solution(n, roads, sources, destination) {
    var answer = [];
    const graph = {};
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    for (const [u,v] of roads) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    
    const distance = Array.from({length:n+1}).fill(-1);
    
    const queue = [destination];
    distance[destination] = 0;
    while (queue.length) {
        const node = queue.shift();
        for (const next of graph[node]) {
            if (distance[next] === -1) {
                distance[next] = distance[node] + 1;
                queue.push(next);
            }
        }
    }
    
    return sources.map((source) => distance[source]);
    
    
}
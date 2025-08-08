function solution(n, edge) {
    var answer = 0;
    const graph = {};
    for (let i = 1 ; i <= n ; i++) {
        graph[i] = [];
    }
    for (const [u,v] of edge) {
        graph[u].push(v);
        graph[v].push(u);
    }
    const visited = Array.from({length:n+1}).fill(false);
    visited[1] = true;
    const res = [];
    const queue = [[1,0]];
    while (queue.length) {
        const [node, depth] = queue.shift();
        res.push([node,depth]);
        
        for (const next of graph[node]) {
            if(!visited[next]) {
                visited[next] = true;
                queue.push([next,depth+1]);
            }
        }
    }
    let max = -Infinity;
    for (const [node,depth] of res) {
        max = Math.max(max,depth);
    }
    for (const [node,depth] of res) {
        if (max === depth) answer++;
     }
    return answer;
}
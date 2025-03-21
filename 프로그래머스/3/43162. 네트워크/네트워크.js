function dfs(currentNode, graph, visited) {
    visited[currentNode] = true;
    if (!graph[currentNode]) return;
    for (const nextNode of graph[currentNode]) {
        if (!visited[nextNode]) {
            visited[nextNode] = true;
            dfs(nextNode, graph, visited);
        }
    }
}

function solution(n, computers) {
    var answer = 0;
    const graph = {};
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && computers[i][j] === 1) {
                if (graph[i]) graph[i].push(j);
                else graph[i] = [j];
            }
        }
    }
    const visited = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if(!visited[i]) {
            answer++;
            dfs(i,graph,visited);
        }
    }
    return answer;
}
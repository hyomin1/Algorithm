function solution(edges) {
    var answer = [0,0,0,0];

    const outG = {};
    const inG = {};
    
    for (const [u,v] of edges) {         
        if (!outG[u]) outG[u] = [];
        if (!inG[v]) inG[v] = [];
        outG[u].push(v);
        inG[v].push(u);
    }
    // 생성된 정점: 나가는 간선 2개 이상, 들어오는 간선 X
    let createdNode = 0;
    for (const node in outG) {
        if (outG[node].length >= 2 && !inG[node]) {
            createdNode = Number(node);
            break;
        } 
    }
    answer[0] = createdNode;

    
    for (const start of outG[createdNode]) {
      
        const visited = new Set();
        let vertex = 0;
        let edge = 0;
        
        let node = start;
        while (!visited.has(node)) {
            visited.add(node);
            vertex++;
            
            if (outG[node]) {
                edge += outG[node].length;
                node = outG[node][0];
            } else break;
        }
        if (vertex - 1 === edge) answer[2]++;
        else if (edge - 1 === vertex) answer[3]++;
        else answer[1]++;
    
    }
    
    
    return answer;
}
function solution(info, edges) {
    var answer = 0;
    const tree = {};
    for (const [parent,child] of edges) {
        if (!tree[parent]) tree[parent] = [];
        tree[parent].push(child);
    }
    const queue = [];
    let maxSheep = 0;
    queue.push([0,1,0,new Set()]);
    while(queue.length > 0) {
        const [node,sheep,wolf,visited] = queue.shift();
        
        maxSheep = Math.max(maxSheep,sheep);
        
        if (tree[node]) {
            for (const next of tree[node]) {
            visited.add(next);
            }
        }
        
        
        for (const next of visited) {
            if(info[next]) {
                if(sheep > wolf + 1) {
                    
                const newVisited = new Set(visited);
                newVisited.delete(next);
                queue.push([next,sheep,wolf + 1,newVisited]);
                }
            } else {
                const newVisited = new Set(visited);
                newVisited.delete(next);
                queue.push([next,sheep+1,wolf,newVisited]);
            }
        }
        
    }
    return maxSheep;
}
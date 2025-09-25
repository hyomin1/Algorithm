function solution(info, edges) {
    var answer = 0;
    const tree = Array.from({length:info.length},() => []);
    for (const [start,end] of edges) {
        tree[start].push(end)
    }
    const queue = [[0,1,0,new Set()]];
    
    while (queue.length) {
        const [currentNode, sheep, wolf, willVisit] = queue.shift();
        answer = Math.max(answer,sheep);
        
        for (const next of tree[currentNode] || []) {
            willVisit.add(next);
        } 
        for (const next of willVisit) {
            if (info[next] === 1) {
                if (sheep > wolf + 1) {
                    const newWillVisit = new Set(willVisit);
                    newWillVisit.delete(next);
                    queue.push([next,sheep,wolf+1,newWillVisit]);
                }
                
            } else if (info[next] === 0) {
                const newWillVisit = new Set(willVisit);
                newWillVisit.delete(next);
                queue.push([next,sheep+1,wolf,newWillVisit]);
                
            }
        }
    }
    return answer;
}
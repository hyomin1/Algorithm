function find(parents,i) {
    if (i === parents[i]) return i;
    return find(parents,parents[i]);
}

function union(parents,rank,x, y) {
    if (rank[x] > rank[y]) parents[y] = x;
    else if (rank[x] < rank[y]) parents[x] = y;
    else {
        parents[y] = x;
        rank[x]++;
    }
}

function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b) => a[2] - b[2]);
    
    const parents = Array(n).fill().map((_,i) => i);
    const rank = Array(n).fill(0);
    
    let minCost = 0;
    let edge = 0;
    
    for (const cost of costs) {
        if (edge === n-1) {
            break;
        }
        
        const x = find(parents,cost[0]);
        const y = find(parents,cost[1]);
        
        if (x !== y) {
            union(parents,rank,x,y);
            minCost += cost[2];
            edge++;
        }
    }
    return minCost;
}
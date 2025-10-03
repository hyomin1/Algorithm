function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    
    const d = [];
    const p = [];
    for (let i = 0; i < deliveries.length; i++) {
        if (deliveries[i] > 0) d.push([i+1,deliveries[i]]);
        if (pickups[i] > 0) p.push([i+1,pickups[i]]);
    }
    
    while (d.length || p.length) {
        
        const dDist = d.length > 0 ? d[d.length - 1][0] : 0;
        const pDist = p.length > 0 ? p[p.length - 1][0] : 0;
        
        answer += Math.max(dDist,pDist) * 2;
        
        let left = cap;
        while (left > 0 && d.length > 0) {
            const [home, count] = d.pop();
            
            if (count > left) {
                d.push([home,count-left]);
                left = 0;
            } else {
                left -= count;
            }
        }
        left = cap;
        while (left > 0 && p.length > 0) {
            const [home, count] = p.pop();
            
            if (count > left) {
                p.push([home,count-left]);
                left = 0;
            } else left -= count;
        }
        
        
    }
    return answer;
}
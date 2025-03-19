function solution(priorities, location) {
    var answer = 0;
    
    const queue = priorities.map((p,i) => ({p,i}));
    while (queue.length > 0) {
        const current = queue.shift();
        
        const morePriority = queue.some((v) => current.p < v.p);
        if(morePriority) {
            queue.push(current);
        } else {
            answer++;
            if (location === current.i) {
                return answer;
            }
        }
    }
    return answer;
}
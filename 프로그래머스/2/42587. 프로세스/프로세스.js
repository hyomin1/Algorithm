function solution(priorities, location) {
    var answer = 0;
    const queue = priorities.map((p,i) => ({p,i}));
    
    while(queue.length) {
        const current = queue.shift();
        
        const morePriority = queue.some((q) => current.p < q.p);
        if (morePriority) {
            queue.push(current);
        } else {
            answer++;
            if (location === current.i) return answer;
        }
    }

    return answer;
}
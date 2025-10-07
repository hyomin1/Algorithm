function solution(queue1, queue2) {
    var answer = 0;
    
    let sum1 = queue1.reduce((acc,cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc,cur) => acc + cur, 0);
    
    const queue = [...queue1, ...queue2];
    let q1 = 0;
    let q2 = queue1.length;
    const target = (sum1 + sum2) / 2;
    for (let i = 0; i < queue.length * 2; i++) {
        if (sum1 === target) return answer;
        if (sum1 < target) {
            sum1 += queue[q2++];
        } else sum1 -= queue[q1++];
        answer++;
    }
    
 
    
    return -1;
}
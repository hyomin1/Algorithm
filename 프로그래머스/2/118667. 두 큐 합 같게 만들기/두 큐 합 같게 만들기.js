function solution(queue1, queue2) {
    var answer = 0;
    const queue = [...queue1, ...queue2];
    let sum1 = queue1.reduce((acc,cur) => acc + cur, 0);
    const sum2 = queue2.reduce((acc,cur) => acc + cur, 0);
    if ((sum1+sum2) % 2 !==0) return -1;
    const target = (sum1 + sum2) / 2;
    let p1 = 0;
    let p2 = queue1.length;
    for (let i = 0; i <= queue.length * 2; i++) {
        if (sum1 === target) return answer;
        else if (sum1 < target) {
            sum1 += queue[p2++];
        } else sum1 -= queue[p1++];
        answer++;
    }
    return -1;
}
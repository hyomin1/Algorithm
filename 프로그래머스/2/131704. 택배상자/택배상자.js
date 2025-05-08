function solution(order) {
    var answer = 0;
    let i = 1;
    const stack = [];
    for (const o of order) {
       while (i <= order.length && stack[stack.length-1] !== o) {
           stack.push(i++);
       }
        if(stack[stack.length-1] === o) {
            answer++;
            stack.pop();
        } else break;
    }
    return answer;
}
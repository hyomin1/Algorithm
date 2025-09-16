function solution(prices) {
    var answer = [];
    
    const stack = [];
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length-1]] > prices[i]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    
    while(stack.length) {
        const index = stack.pop();
        answer[index] = prices.length - 1 - index;
    }
    return answer;
}
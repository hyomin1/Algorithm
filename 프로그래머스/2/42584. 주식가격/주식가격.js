function solution(prices) {
    var answer = [];
    const stack = [];
    const len = prices.length;
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const j = stack.pop();
            answer[j] = i - j; 
        }
        stack.push(i);
        
    }
    while (stack.length) {
        const index = stack.pop();
        answer[index] = len - index - 1;
    }
    
    return answer;
}
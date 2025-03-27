function solution(prices) {
    var answer = [];
    const stack = [];
    const n = prices.length;
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    while (stack.length > 0) {
        const i = stack.pop();
        answer[i] = n - 1 - i;
    }
    return answer;
}
function solution(prices) {
    const n = prices.length;
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let time = 0;
        for (let j = i + 1; j < n; j++) {
            time++;
            if (prices[i] > prices[j]) break;
        }
        answer.push(time);
    }
    
    return answer;
}
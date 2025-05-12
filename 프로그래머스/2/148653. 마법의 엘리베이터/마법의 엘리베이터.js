function solution(storey) {
    var answer = 0;
    while (storey > 0) {
        const cur = storey % 10;
        const next = Math.floor(storey / 10) % 10;
        if (cur > 5 || (cur === 5 && next >= 5)) {
            answer += (10 - cur);
            storey += 10;
        } else answer += cur;
        storey = Math.floor(storey/10);
    
    }
    return answer;
}
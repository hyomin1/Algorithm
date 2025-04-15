function solution(d, budget) {
    var answer = 0;
    d.sort((a,b) => a - b);
    for (const cost of d) {
        if (budget >= cost) {
            budget -= cost;
            answer++;
        }
    }
    return answer;
}
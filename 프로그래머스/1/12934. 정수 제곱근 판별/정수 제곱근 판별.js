function solution(n) {
    var answer = 0;
    
    const sq = Math.sqrt(n);
    answer = Number.isInteger(sq) ? (sq+1) ** 2 : -1;
    return answer;
}
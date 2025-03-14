function solution(N, stages) {
    var answer = [];
    const failure = [];

    for(let i = 1; i <= N; i++) {
        let arrived = 0, unclear = 0;
        for(let j = 0; j < stages.length; j++) {
            if (stages[j] >= i) arrived++;
            if (stages[j] === i) unclear++;
        }
        
        failure[i-1] = unclear / arrived;
    }
    const arr = failure.map((v, i) => ({v,i})).sort((a, b) => b.v - a.v);
    answer = arr.map((v) => v.i += 1);
    return answer;
}
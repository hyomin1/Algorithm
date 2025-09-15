function solution(N, stages) {
    var answer = [];
    const failure = {};
    for (let i = 1 ; i <= N; i++) {
        let player = 0;
        let noClear = 0;
        for (const stage of stages) {
            if (stage >= i) player++; 
            if (stage === i) noClear++;
        }
        failure[i] = noClear / player;
    }
    const values = Object.entries(failure).sort((a,b) => b[1] - a[1]);

    for (const [key,_] of values) {
        answer.push(Number(key));
    }
    return answer;
}
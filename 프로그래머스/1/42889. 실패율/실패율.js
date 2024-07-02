function solution(N, stages) {
    var answer = [];
    let fails = [];
    for(let i = 1; i <= N; i++) {
        let a=0, b=0;
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] >= i) a++;
            if(stages[j] === i) b++;
        }
        if(a === 0) fails.push({stage:i,failure:0});
        else fails.push({stage:i,failure:b/a});
    }
    fails.sort((a,b) => b.failure-a.failure);
    fails.forEach((v) => answer.push(v.stage));
    
    
    return answer;
}
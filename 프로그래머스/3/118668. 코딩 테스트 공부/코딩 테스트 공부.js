function solution(alp, cop, problems) {
    var answer = 0;
    const maxAlp = Math.max(...problems.map((v) => v[0]));
    const maxCop = Math.max(...problems.map((v) => v[1]));
    const dp = Array.from({length: maxAlp + 10}, ()=>Array(maxCop+10).fill(Infinity));
    
    alp = Math.min(alp,maxAlp);
    cop = Math.min(cop,maxCop);
    
    dp[alp][cop] = 0;
    
    for (let a = alp; a <= maxAlp; a++) {
        for (let c = cop; c <= maxCop; c++) {
            if (dp[a][c] === Infinity) continue;
            // 공부 하는 방법
            const nextA = Math.min(a+1,maxAlp);
            const nextC = Math.min(c+1,maxCop);
            dp[nextA][c] = Math.min(dp[nextA][c], dp[a][c] + 1);  // 1. 알고력
            dp[a][nextC] = Math.min(dp[a][nextC], dp[a][c] + 1);  // 2. 코딩력
            
            // 문제 푸는 방법
            for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
                if (a >= alp_req && c >= cop_req) {
                    const nextA = Math.min(a+alp_rwd,maxAlp);
                    const nextC = Math.min(c+cop_rwd,maxCop);
                    dp[nextA][nextC] = Math.min(dp[nextA][nextC], dp[a][c] + cost);
                    
                }
            }
           
        }
    }
    
    return dp[maxAlp][maxCop];
}
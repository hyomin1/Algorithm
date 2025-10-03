function solution(n, tops) {
    var answer = 0;
    const dp = Array.from({length:n}, ()=> Array(4).fill(0));
    dp[0][0] = 1;
    if (tops[0]) {
        dp[0][1] = 1;
    }
    dp[0][3] = 1;
    dp[0][2] = 1;
    
    const mod = 10007;
    for (let i = 1 ; i < n; i++) {
        // 1. 그냥 정삼각형 타일
        dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3]) % mod;
        // 2. 그냥 정삼각형 타일인데, 직전 위쪽 정삼각형과 함께 마름모 였던 경우 
        if (tops[i]) {
            dp[i][1] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3]) % mod;
        }
        // 3. 오른쪽 마름모로 두는 경우
        dp[i][2] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3]) % mod;
        
        // 4. 왼쪽 마름모로 두는 경우 -> 직전에 오른쪽 마름모 두는 경우는 제외
        dp[i][3] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][3]) % mod;
        
       
        
    }
    answer = (dp[n-1][0] + dp[n-1][1] + dp[n-1][2] + dp[n-1][3]) % mod;
 
    return answer;
}
function solution(n) {
    var answer = 0;
    const dp = Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < dp.length;i++) {
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
    }
    return dp[n];
}
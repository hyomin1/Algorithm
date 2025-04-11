function solution(n) {
    const dp = [0,1];
    for (let i = 2; i <= n ;i++) {
        dp.push((dp[i-2] + dp[i-1]) % 1234567);
    }
    return dp[n];
}
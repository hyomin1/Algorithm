function solution(n) {
    var answer = 0;
    const dp = Array(n+1).fill(0);
    dp[0] = 1;
    dp[2] = 3;
    for (let i = 4; i <=n ; i+=2) {
        dp[i] = (3 * dp[i-2]) % 1000000007;
        for (let j = 0; j <= i - 4; j += 2) {
            dp[i] = (dp[i] + 2 * dp[j]) % 1000000007;
        }
    }
    return dp[n];
}
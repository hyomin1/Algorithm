function solution(n) {
    var answer = 0;
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    answer = dp[n];
    return answer;
}
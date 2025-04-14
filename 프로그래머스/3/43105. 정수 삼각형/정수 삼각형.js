function solution(triangle) {
    var answer = 0;
    const dp = Array(triangle.length).fill().map((_,i) => Array(triangle[i].length).fill(0));
    dp[0][0] = triangle[0][0];
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                dp[i][j] = dp[i-1][j] + triangle[i][j];
            } else if (j === triangle[i].length -1){
                dp[i][j] = dp[i-1][j-1] + triangle[i][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j] + triangle[i][j], dp[i-1][j-1] + triangle[i][j], dp[i][j]);
            }
        }
    }
    answer = Math.max(...dp.flatMap((v) => v));
    return answer;
}
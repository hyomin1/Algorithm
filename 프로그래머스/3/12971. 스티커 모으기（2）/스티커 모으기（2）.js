function solution(sticker) {
    var answer = 0;

    const n = sticker.length;
    if (n === 1) return sticker[0];
    const dp1 = Array(n).fill(0); // 첫 번째 뜯은 경우
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i-1],dp1[i-2] + sticker[i]);
    }
    const dp2 = Array(n).fill(0); // 첫 번째 뜯지 않은경우
    dp2[0] = 0;
    dp2[1] = sticker[1];
    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i-1],dp2[i-2] + sticker[i]);
    }
    
    answer = Math.max(dp1[n-2],dp2[n-1]);
    return answer;
}
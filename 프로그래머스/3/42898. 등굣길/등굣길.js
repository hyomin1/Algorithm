function solution(m, n, puddles) {
    var answer = 0;
    const map = Array(m+1).fill().map(() => Array(n+1).fill(0));
    
    map[1][1] = 1;
    for (const [x,y] of puddles) {
        map[x][y] = -1;
    }
    const mod = 1000000007;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if((i === 1 && j === 1) || map[i][j] === -1) continue;
            
            if (map[i][j-1] === -1) {
                map[i][j] += (map[i-1][j] % mod);
            }
            else if (map[i-1][j] === -1) {
                map[i][j] += (map[i][j-1] % mod);
            } else {
               map[i][j] = (map[i][j-1] + map[i-1][j]) % mod;
            }
        }
    }
    answer = map[m][n];
    return answer;
}
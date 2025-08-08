function solution(board, skill) {
    var answer = 0;
    const n = board.length;
    const m = board[0].length;
    const S = Array.from({length:n+1},() => Array.from({length:m+1}).fill(0));
    for (const s of skill) {
        const [type,r1,c1,r2,c2,degree] = s;
        const value = type === 1 ? -degree : degree;
        S[r1][c1] += value;
        S[r1][c2+1] += -value;
        S[r2+1][c1] += -value;
        S[r2+1][c2+1] += value;
        
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < m; j++) {
            S[i][j+1] += S[i][j];
        }
    }
    for (let j = 0; j <= m; j++) {
        for (let i = 0; i < n; i++) {
            S[i+1][j] += S[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] + S[i][j] > 0) answer++;
        }
    }
   
    return answer;
}
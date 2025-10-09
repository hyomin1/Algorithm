function solution(board, skill) {
    var answer = 0;
    const N = board.length;
    const M = board[0].length;
    const arr = Array.from({length:N+1}, ()=>Array(M+1).fill(0));
    
    for (const [type, r1, c1, r2, c2, degree] of skill) {
        const value = type === 1 ? -degree : degree;
        arr[r1][c1] += value;
        arr[r1][c2+1] -= value;
        arr[r2+1][c1] -= value;
        arr[r2+1][c2+1] += value;
    }
    
    for (let i = 0; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            arr[i][j] += arr[i][j-1];
        }
    }
    for (let i = 0; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            arr[j][i] += arr[j-1][i];
        }
    }
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] + arr[i][j] > 0) answer++;
        }
    }
    return answer;
}
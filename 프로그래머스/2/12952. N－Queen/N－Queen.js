function solution(n) {
    var answer = 0;
    const colUsed = Array(n).fill(false);
    const diag1 = Array(2*n).fill(false);
    const diag2 = Array(2*n).fill(false);
    
    function dfs(row) {
        if (row === n) {
            answer++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (colUsed[col] || diag1[row-col+n] || diag2[row+col]) continue;
            colUsed[col] = true;
            diag1[row-col+n] = true;
            diag2[row+col] = true;
            dfs(row+1);
            
            colUsed[col] = false;
            diag1[row-col+n] = false;
            diag2[row+col] = false;
        }
    }
    dfs(0);
    return answer;
}
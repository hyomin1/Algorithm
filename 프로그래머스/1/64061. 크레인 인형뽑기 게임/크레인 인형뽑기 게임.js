function solution(board, moves) {
    const rows = board.length;
    const lanes = Array(rows).fill().map(() => []);

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j]) lanes[j].push(board[i][j]);
        }
    }
    
    var answer = 0;
    const bucket = [];
    for (const move of moves) {
        
        if (lanes[move - 1].length > 0) {
            const doll = lanes[move-1].pop();
            
            if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
                bucket.pop();
                answer += 2;
            } else bucket.push(doll);
        }
    }
    return answer;
}
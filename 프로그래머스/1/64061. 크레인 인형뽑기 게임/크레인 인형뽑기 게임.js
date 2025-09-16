function solution(board, moves) {
    var answer = 0;
    const lanes = Array.from({length:board.length}, ()=> []);
    
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j]) lanes[j].push(board[i][j]);
        }
    }
    
    const stack = [];
    
    for (const move of moves) {
        if (lanes[move-1].length > 0) { 
            const doll = lanes[move-1].pop();
            if (stack.length > 0 && stack[stack.length-1] === doll) {
                answer+=2;
                stack.pop();
            } else stack.push(doll);
            
        }
    }
    return answer;
}
function move(board,pos,stack) {
    for(let i = 0; i < board.length; i++) {
        if(board[i][pos] !== 0) {
            stack.push(board[i][pos]);
            board[i][pos] = 0;
            break;
        }
    }
}

function solution(board, moves) {
    var answer = 0;
    const stack = [];
    for (let i = 0; i < moves.length; i++) {
        move(board,moves[i]-1,stack);
        const len = stack.length;
        if (len >= 2) {
            if (stack[len -1] === stack[len - 2]) {
                for(let i = 0; i < 2; i++) stack.pop();
                answer += 2;
            }
        }
    }
    console.log(board);
    return answer;
}
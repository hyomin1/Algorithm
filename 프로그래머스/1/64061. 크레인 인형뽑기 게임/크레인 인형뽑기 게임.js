function solution(board, moves) {
    var answer = 0;
    const lanes = Array(board.length).fill().map(() => []);
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[i].length; j++) {
            const doll = board[i][j];
            if (doll) lanes[j].push(doll);
        }
    }
   
    const stack = [];
    for (const move of moves) {
        const lane = lanes[move-1];
        if (lane.length > 0) {
            const doll = lane.pop();
            if (stack.length > 0 && stack[stack.length - 1] === doll) {
                stack.pop();
                answer += 2;
            } else stack.push(doll);
        }
    }
    return answer;
}
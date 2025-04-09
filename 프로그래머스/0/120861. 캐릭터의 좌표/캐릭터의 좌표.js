function isValidMove(x,y,boardX,boardY) {
    return x >= -boardX && y >= -boardY && x <= boardX && y <= boardY;
}

function solution(keyinput, board) {
    var answer = [];
    const boardX = Math.floor(board[0] / 2);
    const boardY = Math.floor(board[1] / 2);
    let x = 0, y = 0;
    for (const key of keyinput) {
        switch (key) {
            case 'left':
                const nx1 = x-1;
                if (isValidMove(nx1,y,boardX,boardY)) {
                    x--;
                }
                break;
            case 'right':
                const nx2 = x+1;
                if (isValidMove(nx2,y,boardX,boardY)) {
                    x++;
                }
                break;
            case 'up':
                const ny1 = y+1;
                if (isValidMove(x,ny1,boardX,boardY)) {
                    y++;
                }
                break;
            case 'down':
                const ny2 = y-1;
                if (isValidMove(x,ny2,boardX,boardY)) {
                    y--;
                }
                break;
        }
    }
    answer = [x,y];
    return answer;
}
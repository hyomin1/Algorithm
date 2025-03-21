function matchBlock(m,n,board) {
    const set = new Set();
    for (let i = 0; i < m-1; i++) {
        for (let j = 0; j < n-1; j++) {
            if(board[i][j] !== '0' && board[i][j] === board[i][j+1] && board[i][j+1] === board[i+1][j] && board[i+1][j] === board[i+1][j+1]) {
                set.add(i+','+j);
                set.add((i+1)+','+j);
                set.add(i+','+(j+1));
                set.add((i+1)+','+(j+1));
            }
        }
    }
    clearBoard(m,n,set,board);
    return set.size;
}

function clearBoard(m,n,set,board) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(set.has(i+','+j)) {
                board[i][j] = '0';
            }
        }
    }
}

function downBlock(m,n,board) {
    for (let j = 0; j < n; j++) {
        const stack = [];
        
        for (let i = 0; i < m; i++) {
            if(board[i][j] !== '0') stack.push(board[i][j]);
        }
        
        for (let i = m - 1; i >= 0; i--) {
            board[i][j] = stack.length > 0 ? stack.pop() : '0';
        }
    }
}

function solution(m, n, board) {
    var answer = 0;
    board = board.map((b) => b.split(''));
    while(true) {
        const size = matchBlock(m,n,board);
        if (size === 0) break;
        answer += size;
        downBlock(m,n,board); 
    }
       
    return answer;
}
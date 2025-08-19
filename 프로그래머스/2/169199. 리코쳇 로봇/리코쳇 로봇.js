function solution(board) {
    var answer = 0;
    const N = board.length;
    const M = board[0].length;
    let s = null;
    let e = null;
    const visited = Array.from({length:N}, ()=>Array.from({length:M} , () => Array(4).fill(false)));
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (board[y][x] === 'R')  s = [y,x];
            else if (board[y][x] === 'G') e = [y,x];
        }
    }
    const queue = [[...s,0]];
    const d = [[0,1],[0,-1],[1,0],[-1,0]];
    
    function roll(y,x,dir) {
        const [dy,dx] = dir;
        while(true) {
            y += dy;
            x += dx;
            if (y < 0 || y >= N || x < 0 || x >= M || board[y][x] === 'D') {
                return [y-dy,x-dx];
            }
        }
    }
    while(queue.length) {
        const [y,x,count] = queue.shift();
        if (y === e[0] && x === e[1]) return count;
        
        for (let i = 0; i < 4; i++) {
            const [ny,nx] = roll(y,x,d[i]);
            if (!visited[ny][nx][i]) {
                visited[ny][nx][i] = true;
                queue.push([ny,nx,count+1]);
            }
        }
    }
   
    return -1;
}
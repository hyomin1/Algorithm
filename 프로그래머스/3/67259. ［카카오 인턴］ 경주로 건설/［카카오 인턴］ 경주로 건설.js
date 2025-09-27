function solution(board) {
    var answer = 0;
    const N = board.length;
    const visited = Array.from({length: N} ,() => Array.from({length:N} , () => Array(4).fill(Infinity)));

    
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const queue = [];
    for (let i = 0; i < 4; i++) {
        queue.push([0,0,i,0]);
        visited[0][0][i] = 0;
    }
    while (queue.length) {
        const [y,x,dir,cost] = queue.shift();
       
        
        for (let i = 0; i < 4; i++) {
            const [dy, dx] = dirs[i];
            const nx = dx + x;
            const ny = dy + y;
            if (ny < 0 || ny >= N || nx < 0 || nx >= N || board[ny][nx] !== 0)
                continue;
            const newCost = dir === i ? cost + 100 : cost + 600;
            if (newCost < visited[ny][nx][i]) {
                visited[ny][nx][i] = newCost;
                queue.push([ny,nx,i,newCost]);
            }
         
            
        }
    }
    
    return Math.min(...visited[N-1][N-1]);
}
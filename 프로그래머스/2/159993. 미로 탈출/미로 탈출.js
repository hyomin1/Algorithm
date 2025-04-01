function isValidMove(x,y,cols,rows,maps) {
    return x >= 0 && y >= 0 && x < cols && y < rows && maps[y][x] !== 'X';
}


function solution(maps) {
    var answer = 0;
    let startX = -1, startY = -1;
    let leverX = -1, leverY = -1;
    let endX = -1, endY = -1;
    const rows = maps.length;
    const cols = maps[0].length;
    const dy = [-1,1,0,0];
    const dx = [0,0,-1,1];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] === 'S') [startY, startX] = [i, j];
            if (maps[i][j] === 'L') [leverY, leverX] = [i, j];
            if (maps[i][j] === 'E') [endY, endX] = [i, j];
        }
    }
    function bfs(x,y,targetX,targetY) {
        const visited = Array(rows).fill().map(()=>Array(cols).fill(-1));
        const queue = [[y,x]];
        visited[y][x] = 0;
        while(queue.length > 0) {
            const [y,x] = queue.shift();
            if (y === targetY && x === targetX) {
                return visited[y][x];
            }
            for(let i = 0; i < 4; i++) {
                const nx = dx[i] + x;
                const ny = dy[i] + y;
            
                if (!isValidMove(nx,ny,cols,rows,maps)) continue;
            
                if(visited[ny][nx] === -1) {
                    visited[ny][nx] = visited[y][x] + 1;
                    queue.push([ny,nx]);
                }
            }
        }
        return -1;
    }
    const res1 = bfs(startX,startY,leverX,leverY); // S -> L
    const res2 = bfs(leverX,leverY,endX,endY); // L -> S
    if (res1 === -1 || res2 === -1) return -1;
    return res1 + res2;    
}
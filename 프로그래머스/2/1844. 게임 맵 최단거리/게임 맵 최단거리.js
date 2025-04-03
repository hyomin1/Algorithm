function isValidMove(x,y,rows,cols, maps,visited) {
    return x >= 0 && y >= 0 && x < cols && y < rows && maps[y][x] === 1 && visited[y][x] === -1;
}

function solution(maps) {
    var answer = 0;
    const queue = [];
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array(rows).fill().map(()=>Array(cols).fill(-1));
    
    const dy = [1,-1,0,0];
    const dx = [0,0,1,-1];
    visited[0][0] = 1;
    queue.push([0,0]);
    while(queue.length > 0) {
        const [y,x] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const ny = dy[i] + y;
            const nx = dx[i] + x;
            if(!isValidMove(nx,ny,rows,cols,maps,visited)) continue;
            visited[ny][nx] = visited[y][x] + 1;
            queue.push([ny,nx]);
        }
    }
    return visited[rows-1][cols-1];
}
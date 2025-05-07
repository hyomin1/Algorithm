function isValidMove(x,y,n,m,visited,maps) {
    return x >= 0 && y >= 0 && x < m && y < n && maps[y][x] !== 0 && visited[y][x] === -1;
}

function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array(n).fill().map(() => Array(m).fill(-1));
    visited[0][0] = 1;
    const queue = [[0,0]];
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    while (queue.length) {
        const [y, x] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            if (!isValidMove(nx,ny,n,m,visited,maps)) continue;
            queue.push([ny,nx]);
            visited[ny][nx] = visited[y][x] + 1;
        }
    }
    
    return visited[n-1][m-1];
}
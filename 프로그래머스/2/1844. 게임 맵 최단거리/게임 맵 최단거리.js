function solution(maps) {
    var answer = 0;
    
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    const n = maps.length;
    const m = maps[0].length;
    
    const queue = [[0,0]];
    const visited = Array(n).fill().map(() => Array(m).fill(-1));
    visited[0][0] = 1;
    
    function isValidMove(x,y) {
        return x >= 0 && x < m && y >= 0 && y < n && visited[y][x] === -1 && maps[y][x] === 1;
    }
    
    while (queue.length) {
        const [y,x] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            if(!isValidMove(nx,ny)) continue;
            visited[ny][nx] = visited[y][x] + 1;
            queue.push([ny,nx]);
        }
    }
    answer = visited[n-1][m-1];
    return answer;
}
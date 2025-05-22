function solution(land) {
    var answer = 0;
    const n = land.length;
    const m = land[0].length;
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    const visited = Array(n).fill().map(() => Array(m).fill(false));
    const oil = Array(m).fill(0);
    const arr = [];
    function isValidMove(x,y,visited) {
        return x >= 0 && x < m && y >= 0 && y < n && !visited[y][x] && land[y][x] === 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                const queue = [[i, j]];
                let sum = 0;
                const cols = new Set();
                while(queue.length) {
                    sum++;
                    const [y, x] = queue.shift();
                    cols.add(x);
                    visited[y][x] = true;
                    for (let k = 0; k < 4; k++) {
                        const nx = dx[k] + x;
                        const ny = dy[k] + y;
                        if(!isValidMove(nx,ny,visited)) continue;
                        queue.push([ny,nx]);
                        visited[ny][nx] = true;
                    }
                }
                for (const col of cols) {
                    oil[col] += sum;
                }
            }
        }
    }
    
    return Math.max(...oil);
}
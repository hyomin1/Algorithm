function solution(maps) {
    var answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    
    const visited = Array(n).fill().map(() => Array(m).fill(false));
    function isValidMove(x, y) {
        return x >= 0 && x < m && y >= 0 &&  y < n && maps[y][x] !== 'X' && !visited[y][x];
    }
    const queue = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if(maps[i][j] !== 'X' && !visited[i][j]) {
                queue.push([i,j]);
                let sum = 0;
                while(queue.length) {
                    const [y, x] = queue.shift();
                    sum += Number(maps[y][x]);
                    visited[y][x] = true;
                    for (let k = 0; k < 4; k++) {
                        const nx = dx[k] + x;
                        const ny = dy[k] + y;
                        if(!isValidMove(nx,ny)) continue;
                        queue.push([ny,nx]);
                        visited[ny][nx] = true;
                    }
                }
                answer.push(sum);
            }
        }
    }
    if (answer.length === 0) return [-1];
    return answer.sort((a,b) => a - b);
}
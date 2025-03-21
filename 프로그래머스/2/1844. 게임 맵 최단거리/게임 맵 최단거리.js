function solution(maps) {
    var answer = 0;
    
    const m = maps.length;
    const n = maps[0].length;
    const visited = Array(m).fill().map(()=>Array(n).fill(-1));
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    
    visited[0][0] = 1;
    const queue = [[0,0]];
    
    while (queue.length > 0) {
        const [y, x] = queue.shift();
        if(y === m-1 && x === n-1) {
            return visited[y][x];
        }
        for(let i = 0; i < 4; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[ny][nx] === 1 && visited[ny][nx] === -1) {
                visited[ny][nx] = visited[y][x] + 1;
                queue.push([ny,nx]);
            }
        }
    }
    
    return -1;
}
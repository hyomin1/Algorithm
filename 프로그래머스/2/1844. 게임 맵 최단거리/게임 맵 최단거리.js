function solution(maps) {
    var answer = 0;
    const rows = maps.length;
    const cols = maps[0].length;
    
    const visited = Array(rows).fill().map(()=>Array(cols).fill(-1));
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    
    const queue = [[0,0]];
    visited[0][0] = 1;
    while(queue.length > 0) {
        const [y,x] = queue.shift();
        if (y === rows - 1 && x === cols-1) {
            return visited[y][x];
        }
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (ny >= 0 && nx >= 0 && ny < rows && nx < cols &&
               maps[ny][nx] === 1 && visited[ny][nx] === -1) {
                visited[ny][nx] = visited[y][x] + 1;
                queue.push([ny,nx]);
            }
        }
    }
    
    return -1;
}
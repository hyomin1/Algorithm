function solution(maps) {    
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    
    const queue = [[0,0,0]];
    const N = maps.length;
    const M = maps[0].length;
    const visited = Array.from({length:N}, () => Array(M).fill(false));
    visited[0][0] = true;
    while (queue.length) {
        const [y,x,count] = queue.shift();
        if (y === N - 1 && x === M - 1) return count + 1;
        
        for (const [dy, dx] of dirs) {
            const nx = dx + x;
            const ny = dy + y;
            if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx] && maps[ny][nx] === 1) {
                visited[ny][nx] = true;
                queue.push([ny,nx,count+1]);
            }
        }
    }
    return -1;
}
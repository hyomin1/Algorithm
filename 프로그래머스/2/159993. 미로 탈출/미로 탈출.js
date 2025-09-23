function solution(maps) {
    var answer = 0;
    const N = maps.length;
    const M = maps[0].length;
    let s = [];
    let l = [];
    let e = [];
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (maps[y][x] === 'S')  s = [y,x];
            else if (maps[y][x] === 'L') l = [y,x];
            else if (maps[y][x] === 'E') e = [y,x];
        }
    }
    
    
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    function bfs(start,end) {
        const queue = [[start[0],start[1],0]];
        const visited = Array.from({length:N}, ()=>Array(M).fill(false));
        visited[start[0]][start[1]] = true;
   
        while (queue.length) {
            const [y, x, count] = queue.shift();
            if (y === end[0] && x === end[1]) {
                return count;
            }
            for (const dir of dirs) {
                const [dy, dx] = dir;
                const ny = dy + y;
                const nx = dx + x;
                if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx] && maps[ny][nx] !== 'X') {
                    queue.push([ny,nx, count+1]);
                    visited[ny][nx] = true;
                }
            }
        }
        return -1;
    }
    const count1 = bfs(s,l);
    const count2 = bfs(l,e);
    if (count1 === -1 || count2 === -1) return -1;
    return count1 + count2;
     
   
}
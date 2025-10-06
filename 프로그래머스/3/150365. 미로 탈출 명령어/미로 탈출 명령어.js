function solution(n, m, x, y, r, c, k) {
    var answer = '';
    
    const dir = [
        [1,0,'d'],
        [0,-1,'l'],
        [0,1,'r'],
        [-1,0,'u']
    ];
    const visited = Array.from({length:n+1}, () => Array.from({length:m+1}, ()=>Array(k+1).fill(false)));
    function dfs(depth,cx,cy,path) {
        if (answer) return;
        
        const remain = k - depth;
        if (visited[cx][cy][remain]) return;
        visited[cx][cy][remain] = true;
        
        if (remain === 0) {
            if (cx === r && cy === c) answer = path;
            return;
        }
        for (const [dx, dy, d] of dir) {
            const nx = dx + cx;
            const ny = dy + cy;
            if (nx >= 1 && ny >= 1 && nx <= n && ny <= m) {
                dfs(depth+1, nx,ny,path+d);
            }
        }
        
    }
    dfs(0,x,y,'');
    
    answer = answer || 'impossible';

    return answer;
}
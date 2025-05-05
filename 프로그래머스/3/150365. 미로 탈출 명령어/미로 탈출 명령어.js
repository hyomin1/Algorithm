function solution(n, m, x, y, r, c, k) {
    var answer = '';
    const minDistance = Math.abs(x-r) + Math.abs(y-c);
    if (minDistance > k || (k-minDistance) % 2 !== 0) return 'impossible';
    const dirs = [
        [1,0,'d'],
        [0,-1,'l'],
        [0,1,'r'],
        [-1,0,'u']
    ];
    
    function dfs(cx,cy,depth,s) {
        if (answer) return;
        const remainingDistance = Math.abs(cx-r) + Math.abs(cy-c);
        const remainingSteps = k - depth;
        if (remainingDistance > remainingSteps ||  (remainingSteps - remainingDistance) % 2 !== 0) return;
        if (depth === k) {
            if(cx === r && cy === c) answer = s;
            return;
        }
        for (const [dx,dy,dir] of dirs) {
            const nx = dx + cx;
            const ny = dy + cy;
            if (nx >= 1 && ny >= 1 && nx <= n && ny <= m) {
                dfs(nx,ny,depth+1,s+dir);
            }
        }
    }
    dfs(x,y,0,'');
    return answer || 'impossible';
}
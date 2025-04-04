function isValidMove(x,y,N,board) {
    return x >= 0 && y >= 0 && x < N && y < N && board[y][x] === 0;
}

function calculateCost(prevDirection, direction,cost) {
    // -1: 최초 도로 건설, 방향 그대로인 경우는 직선도로
    if (prevDirection === -1 || prevDirection === direction) {
        return cost + 100;
    } else return cost + 600;
}

function solution(board) {
    var answer = Infinity;
    const N = board.length;
    const queue = [];
    queue.push([0,0,-1,0]); // x, y, direction, cost
    const dy = [1,-1,0,0]; // 상, 하, 좌, 우
    const dx = [0,0,-1,1];
    
    const visited = Array(N).fill().map(() => Array(N).fill().map(()=>Array(4).fill(0)));
    
    while (queue.length > 0) {
        const [x, y, direction, cost] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            if(!isValidMove(nx,ny,N,board)) continue;
            const newCost = calculateCost(direction,i,cost);
            if (nx === N - 1 && ny === N -1) {
                answer = Math.min(answer,newCost);
            } else if (visited[ny][nx][i] === 0 || visited[ny][nx][i] > newCost) {
                visited[ny][nx][i] = newCost;
                queue.push([nx,ny,i,newCost]);
            }
        }
    }
    return answer;
}
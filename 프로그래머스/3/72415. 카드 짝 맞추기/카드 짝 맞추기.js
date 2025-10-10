function solution(board, r, c) {
    let answer = Infinity;
    const N = board.length;
    const card = {};

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const num = board[i][j];
            if (num === 0) continue;
            if (!card[num]) card[num] = [];
            card[num].push([i, j]);
        }
    }

    
    const cardNums = Object.keys(card).map(Number);
    const orders = [];
    function dfs(path) {
        if (path.length === cardNums.length) {
            orders.push([...path]);
            return;
        }
        for (const num of cardNums) {
            if (!path.includes(num)) dfs([...path, num]);
        }
    }
    dfs([]);

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function bfs(board, r1, c1, r2, c2) {
        const visited = Array.from({ length: N }, () => Array(N).fill(false));
        const q = [[r1, c1, 0]];
        visited[r1][c1] = true;

        while (q.length) {
            const [y, x, cnt] = q.shift();
            if (y === r2 && x === c2) return cnt;

            for (const [dy, dx] of dirs) {
            
                let ny = y + dy, nx = x + dx;
                if (0 <= ny && ny < N && 0 <= nx && nx < N && !visited[ny][nx]) {
                    visited[ny][nx] = true;
                    q.push([ny, nx, cnt + 1]);
                }

                
                [ny, nx] = [y, x];
                while (true) {
                    const cy = ny + dy, cx = nx + dx;
                    if (cy < 0 || cy >= N || cx < 0 || cx >= N) break;
                    ny = cy; nx = cx;
                    if (board[ny][nx] !== 0) break;
                }
                if (!visited[ny][nx]) {
                    visited[ny][nx] = true;
                    q.push([ny, nx, cnt + 1]);
                }
            }
        }
    }

    for (const order of orders) {
        const copy = board.map(row => [...row]);
        const copyCard = {};
        for (const key in card) {
            copyCard[key] = card[key].map(([y, x]) => [y, x]);
        }

        let cost = 0;
        let [curR, curC] = [r, c];

        for (const num of order) {
            const [[r1, c1], [r2, c2]] = copyCard[num];
            const d1 = bfs(copy, curR, curC, r1, c1) + bfs(copy, r1, c1, r2, c2) + 2;
            const d2 = bfs(copy, curR, curC, r2, c2) + bfs(copy, r2, c2, r1, c1) + 2;

            if (d1 <= d2) {
                cost += d1;
                [curR, curC] = [r2, c2];
            } else {
                cost += d2;
                [curR, curC] = [r1, c1];
            }

            copy[r1][c1] = 0;
            copy[r2][c2] = 0;
        }
        answer = Math.min(answer, cost);
    }

    return answer;
}

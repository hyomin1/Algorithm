function solution(park, routes) {
    var answer = [];
    let pos = [0,0];
    const rows = park.length;
    const cols = park[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(park[i][j] === 'S') {
                pos = [i,j];
            }
        }
    }
    
    for (const route of routes) {
        let [direction, move] = route.split(' ');
        move = parseInt(move);
        switch(direction) { // 이동 후 좌표가 격자 안넘어가는지 이동 중 X 있는지
            case 'E':
                if (pos[1] + move >= cols) break;
                let go1 = true;
                for (let i = 1; i <= move; i++) {
                    const dx = pos[1] + i;
                    if(park[pos[0]][dx] === 'X') {
                        go1 = false;
                        break;
                    }
                }
                if (go1) pos[1] += move;
                break;
            case 'W':
                if (pos[1] - move < 0) break;
                let go2 = true;
                for (let i = 1; i <= move; i++) {
                    const dx = pos[1] - i;
                    if (park[pos[0]][dx] === 'X') {
                        go2 = false;
                        break;
                    }
                }
                if(go2) pos[1] -= move;
                break;
            case 'N':
                if (pos[0] - move < 0) break;
                let go3 = true;
                for (let i = 1; i <= move; i++) {
                    const dy = pos[0] - i;
                    if(park[dy][pos[1]] === 'X') {
                        go3 = false;
                        break;
                    }
                }
                if(go3) pos[0] -= move;
                break;
            case 'S':
                if (pos[0] + move >= cols) break;
                let go4 = true;
                for (let i = 1; i <= move; i++) {
                    const dy = pos[0] + i;
                    if (park[dy][pos[1]] === 'X') {
                        go4 = false;
                        break;
                    }
                }
                if (go4) pos[0] += move;
                break;
        }
    }
    answer = pos;
    return answer;
}
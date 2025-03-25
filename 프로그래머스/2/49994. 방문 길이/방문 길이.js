
function updateLocation(x, y, dir) {
    switch(dir) {
        case 'U':
            return [x, y + 1];
        case 'D':
            return [x, y - 1];
        case 'R':
            return [x + 1, y];
        case 'L':
            return [x - 1, y];
    }
}

function isValidMove(x, y) {
    return x >= -5 && x <= 5 && y >= -5 && y <= 5;
}

function solution(dirs) {
    var answer = 0;
    const visited = new Set(); // 중복된 경로 저장
    
    let [x, y] = [0, 0];
    for (const dir of dirs) {
        const [nx, ny] = updateLocation(x, y, dir);
        
        if(!isValidMove(nx, ny)) continue;
        
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        
        [x, y] = [nx, ny];
    }
    answer=  visited.size / 2; // 왕복 경로 저장 했으므로 2로 나눈다
    return answer;
}
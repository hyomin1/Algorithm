function solution(dirs) {
    var answer = 0;
    const command = {
        'U' : [0,1],
        'D' : [0,-1],
        'R' : [1,0],
        'L' : [-1,0]
    }
    const set = new Set();
    function isValid(y,x) {
        return x >= -5 && x <= 5 && y >= -5 && y <= 5;
    }
    const pos = [0,0];
    for (const dir of dirs) {
        const nextY = pos[1] + command[dir][1];
        const nextX = pos[0] + command[dir][0];
        if (!isValid(nextY,nextX)) continue;
        const path1 = `${pos[0]}${pos[1]}${nextX}${nextY}`;
        const path2 = `${nextX}${nextY}${pos[0]}${pos[1]}`;
        if (!set.has(path1) && !set.has(path2)) {
            set.add(path1);
            set.add(path2);
            answer++;
        }
        pos[0] = nextX;
        pos[1] = nextY;
    
    }
    
    return answer;
}
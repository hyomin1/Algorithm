function solution(dirs) {
    var answer = 0;
    const visited = new Set();
    let x = 0 , y = 0;
    for (let dir of dirs) {
        let nx = x, ny = y;
        switch(dir) {
            case 'U': ny = y + 1; break;
            case 'D': ny = y - 1; break;
            case 'R': nx = x + 1; break;
            case 'L': nx = x - 1; break;
        }
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        const path = `${x}${y}${nx}${ny}`;
        const reverse = `${nx}${ny}${x}${y}`;
        
        if(!visited.has(path) && !visited.has(reverse)) {
            visited.add(path);
        }
        x = nx;
        y = ny;
    }
    return visited.size;
}
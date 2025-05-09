function solution(n) {
    var answer = [];
    // 몫만큼 반복,
    const arr = Array(n).fill().map((_,i) => Array(i+1).fill(0));
    const sum = Array(n).fill().map((_,i) => i+1).reduce((acc,cur)=>acc+cur,0);
    const dx = [0,1,-1];
    const dy= [1,0,-1];
    
    let num = 1;
    let index = 0;
    let x = 0, y = 0;
    while (num <= sum) {
        arr[y][x] = num++;
        let ny = y + dy[index];
        let nx = x + dx[index];
       if (ny < 0 || ny >= arr.length || nx < 0 || nx >= arr[ny].length || arr[ny][nx] !== 0) {
           index = (index + 1) % 3;
           ny = y + dy[index];
           nx = x + dx[index];
        } 
        y = ny;
        x = nx;
        
    }
    return arr.flat();
}
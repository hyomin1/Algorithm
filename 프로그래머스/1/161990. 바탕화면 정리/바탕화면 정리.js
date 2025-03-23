function solution(wallpaper) {
    var answer = [];
    let minY = Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let maxX = -Infinity;
    
    
    wallpaper.forEach((v,i) => {
        if(v.includes('#')) {
            minY = Math.min(minY,i);
            maxY = Math.max(maxY,i);
        }
    })
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                minX = Math.min(minX,j);
                maxX = Math.max(maxX,j);
            }
        }
    }
    answer = [minY,minX,maxY+1,maxX+1];
    return answer;
}
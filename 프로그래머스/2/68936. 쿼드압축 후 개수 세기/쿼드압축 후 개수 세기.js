function isRight(x,y,size,arr) {
    const value = arr[y][x];
    for (let i = y; i < y + size; i++) {
        for (let j = x; j < x + size; j++) {
            if (value !== arr[i][j]) return false;
        }
    }
    return true;
}

function compress(x,y,size,arr,answer) {
    if(isRight(x,y,size,arr)) {
        answer[arr[y][x]]++;
        return 
    }
    let half = size / 2;
    compress(x,y,half,arr,answer);
    compress(x+half,y,half,arr,answer);
    compress(x,y+half,half,arr,answer);
    compress(x+half,y+half,half,arr,answer);
}

function solution(arr) {
    var answer = [0,0];
    compress(0,0,arr.length,arr,answer);
    return answer;
}
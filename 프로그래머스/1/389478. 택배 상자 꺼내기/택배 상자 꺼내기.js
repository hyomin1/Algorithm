function solution(n, w, num) {
    var answer = 0;
    const box = [];
    const rows = Math.ceil(n/w);
    for (let i = 0; i < rows; i++) {
        box[i] = [];
    }
    let number = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < w; j++) {
            if (number <= n) {
                if (i % 2 === 0) box[i][j] = number++;
                else box[i][w-1-j] = number++;                
            } else {
                if (i % 2 === 0) box[i][j] = 0;
                else box[i][w-1-j] = 0;
            }

        }
    }
   let x = 0;
    let y = 0;
    for (let i = 0; i < box.length; i++) {
        for (let j = 0; j < box[i].length; j++) {
            if(box[i][j] === num) {
                y = i;
                x = j;
                break;
            }
        }
    }
    answer = box.length - y
    if (y+1 < box.length && box[box.length-1][x] === 0) return answer - 1;
     
    return answer;
}
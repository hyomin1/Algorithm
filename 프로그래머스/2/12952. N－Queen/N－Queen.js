function search(n,row,width,diagnoal1,diagnoal2) {
    let answer = 0;
    if (row === n) {
        answer++;
    } else {
        for (let col = 0; col < n; col++) {
            if (width[col] || diagnoal1[col+row] || diagnoal2[col-row+n]) {
                continue;
            }
            width[col] = diagnoal1[col+row] = diagnoal2[col-row+n] = true;
            answer += search(n, row+1,width,diagnoal1,diagnoal2);
            width[col] = diagnoal1[col+row] = diagnoal2[col-row+n] = false;
        }
    }
    return answer;
}

function solution(n) {
    var answer = 0;
    const width = Array(n).fill(false);
    const diagnoal1 = Array(n*2).fill(false);
    const diagnoal2 = Array(n*2).fill(false);
    answer = search(n,0,width,diagnoal1,diagnoal2);
    return answer;
}
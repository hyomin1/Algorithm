function solution(n, left, right) {
    var answer = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        const max = Math.max(row,col);
        answer.push(max+1);
    }
    return answer;
}
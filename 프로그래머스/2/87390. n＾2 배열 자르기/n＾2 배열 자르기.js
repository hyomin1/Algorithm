function solution(n, left, right) {
    var answer = [];
    // 1차원 배열 인덱스에서 n을 나눈 정수 몫이 기존 2차원 배열의 행
    // 열은 1차원 배열 인덱스에서 n을 나눈 나머지
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i/n);
        const col = i % n;
        if (row === col) answer.push(row+1);
        else {
            const max = Math.max(row,col);
            answer.push(max+1);
        }
    }
    return answer;
}
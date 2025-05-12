function solution(n, s) {
    var answer = [];
    while (n > 0) {
        const num = Math.floor(s/n);
        if (num === 0) {
            answer.push(-1);
            break;
        }
        answer.push(num);
        s -= num;
        n--;
    }
    return answer;
}
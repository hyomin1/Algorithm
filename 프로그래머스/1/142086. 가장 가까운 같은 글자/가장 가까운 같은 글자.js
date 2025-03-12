function solution(s) {
    let answer = [-1];
    for (let i = 1; i < s.length; i++) {
        let count = 0;
        for (let j = i-1; j >=0; j--) {
            count++;
            if(s[i] === s[j]) {
                answer.push(count);
                break;
            }
        }
        if (!answer[i]) answer.push(-1);
    }
    return answer;
}
function solution(n) {
    let answer = 0;
    const arr = [];
   
    const str = n.toString(3);

    for (let i = 0; i < str.length; i++) {
        answer += parseInt(str[i]) * (3 ** i);
    }
    return answer;
}
function solution(n, t, m, p) {
    var answer = '';
    let str = '';
    for (let i = 0; i <= t * t; i++) {
        str += i.toString(n);
    }
    for (let i = 0; i < str.length; i++) {
        if ((i+1) % m === p % m) {
            answer += str[i];
        }
    }
    answer = answer.slice(0,t).toUpperCase();
    return answer;
}
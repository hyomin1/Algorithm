function solution(n) {
    var answer = [];
    n = n + '';
    answer = n.split('').reverse().map((v) => parseInt(v));
    return answer;
}
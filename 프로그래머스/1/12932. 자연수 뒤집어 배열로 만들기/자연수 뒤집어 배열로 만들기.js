function solution(n) {
    var answer = [];
    let str = n.toString();
    answer = str.split('').reverse().map((v) => parseInt(v));
    return answer;
}
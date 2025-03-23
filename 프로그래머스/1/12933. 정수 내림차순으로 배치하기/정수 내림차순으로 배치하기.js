function solution(n) {
    var answer = 0;
    n = (n +'').split('').map((v) => parseInt(v)).sort((a,b) => b - a);
    answer = Number(n.join(''));
    return answer;
}
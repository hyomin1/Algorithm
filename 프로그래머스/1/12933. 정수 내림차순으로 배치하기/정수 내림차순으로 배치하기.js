function solution(n) {
    var answer = 0;
    answer = (n+'').split('').sort((a,b) => b - a).join('');
    answer = Number(answer);
    return answer;
}
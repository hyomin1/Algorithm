function solution(num) {
    let answer = '';
    if (num % 2 !== 0) {
        answer = "Odd";
    } else {
        answer = "Even";
    }
    return answer;
}
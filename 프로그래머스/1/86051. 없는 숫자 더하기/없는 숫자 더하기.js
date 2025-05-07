function solution(numbers) {
    var answer = 0;
    answer = 45 - numbers.reduce((sum,val) => sum + val, 0);
    return answer;
}
function solution(numbers) {
    var answer = 0;
    const sum = 45;
    answer = sum - numbers.reduce((sum,cur) => sum + cur, 0);
    return answer;
}
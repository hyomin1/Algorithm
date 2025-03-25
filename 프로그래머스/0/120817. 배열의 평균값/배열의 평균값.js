function solution(numbers) {
    var answer = 0;
    const sum = numbers.reduce((acc,cur) => acc + cur, 0);
    const total = numbers.length;
    answer = sum / total;
    return answer;
}
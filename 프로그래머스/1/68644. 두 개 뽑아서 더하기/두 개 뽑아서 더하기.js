function solution(numbers) {
    var answer = [];
    const len = numbers.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    answer = [...new Set(answer)].sort((a,b)=>a-b);
    return answer;
}
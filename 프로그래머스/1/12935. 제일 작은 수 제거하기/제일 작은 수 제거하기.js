function solution(arr) {
    var answer = [];
    const min = Math.min(...arr);
    answer = arr.filter((v) => v !== min);
    if(answer.length === 0) return [-1];
    return answer;
}
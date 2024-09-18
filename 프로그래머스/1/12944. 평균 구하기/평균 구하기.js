function solution(arr) {
    var answer = 0;
    arr.forEach((v) => answer +=v);
    answer /= arr.length;
    return answer;
}
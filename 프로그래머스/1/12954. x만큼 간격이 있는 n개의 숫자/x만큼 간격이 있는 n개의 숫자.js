function solution(x, n) {
    var answer = [];
    let num = x;
    for(let i = 0; i < n; i++,num+=x) {
        answer.push(num);
    }
    return answer;
}
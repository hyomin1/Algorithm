function solution(absolutes, signs) {
    var answer = 123456789;
    absolutes = absolutes.map((v,i) => {
        v = signs[i] ? v : -v;
        return v;
    })
    answer = absolutes.reduce((sum,cur) => sum + cur, 0);
    return answer;
}
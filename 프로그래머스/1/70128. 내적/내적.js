function solution(a, b) {
    var answer = 1234567890;
    answer = a.reduce((sum,cur,i) => sum + cur * b[i],0);
    
    return answer;
}
function solution(x) {
    var answer = true;
    const arr = (x+'').split('').map((v) => parseInt(v));
    const sum = arr.reduce((sum,cur) => sum + cur,0);
    answer = x % sum === 0 ? true : false;
    return answer;
}
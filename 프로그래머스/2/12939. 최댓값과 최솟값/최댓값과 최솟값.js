function solution(s) {
    var answer = '';
    s = s.split(' ').map(Number);
   
    const max = Math.max(...s);
    const min = Math.min(...s);
    answer = `${min} ${max}`;
    return answer;
}
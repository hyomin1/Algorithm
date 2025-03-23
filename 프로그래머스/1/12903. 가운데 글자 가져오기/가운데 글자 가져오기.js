function solution(s) {
    var answer = '';
    const len = s.length;
    answer = len % 2 === 0 ? s[len /2 -1] + s[len/2] : s[(len-1)/2];
    return answer;
}
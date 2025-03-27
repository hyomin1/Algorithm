function solution(s) {
    var answer = 0;
    const stack = [];
    s = s.split(' ');
    console.log(s);
    for (const c of s) {
        if (c === 'Z') {
            answer -= stack.pop();
        } else {
            stack.push(c);
            answer += parseInt(c);
        }
    }
    return answer;
}
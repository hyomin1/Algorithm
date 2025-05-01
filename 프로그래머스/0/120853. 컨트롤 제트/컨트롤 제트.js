function solution(s) {
    var answer = 0;
    s = s.split(' ');
    let stack = [];
    for (const c of s) {
        if (c === 'Z') stack.pop();
        else stack.push(c);
    }
    stack = stack.map(Number);
    answer = stack.reduce((acc,val) => acc + val,0);
    return answer;
}
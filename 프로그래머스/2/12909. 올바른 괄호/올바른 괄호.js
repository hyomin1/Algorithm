function solution(s){
    var answer = true;

    const stack = [];
    
    for (const c of s) {
        if (stack.length > 0 && stack[stack.length - 1] === '(' && c === ')') stack.pop();
        else stack.push(c);
    }
    answer = stack.length === 0 ? true : false;
    return answer;
}
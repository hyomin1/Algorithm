function solution(s){
    var answer = true;
    const stack = [];
    for (const c of s) {
        if (c === '(') stack.push(c);
        else {
            if (stack.length === 0) return false;
            else stack.pop();
        }
    }

    return stack.length === 0 ? true : false;
}
function solution(s){
    var answer = true;
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(') stack.push(c);
        else {
            if (stack.length < 1) return false;
            else stack.pop();
        }
    }
    
    

    return stack.length > 0 ? false : true;
}
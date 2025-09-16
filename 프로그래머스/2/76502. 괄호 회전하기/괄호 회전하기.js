function solution(s) {
    var answer = 0;
    
    function isRight(str) {
        const stack = [];
        for (const ch of str) {
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            } else {
                if (stack.length === 0) return false;
                const top = stack[stack.length-1];
                if (ch ===')' && top ==='(') stack.pop();
                else if (ch ==='}' && top === '{') stack.pop();
                else if (ch === ']' && top === '[') stack.pop();
            }
            
        }
        
        return stack.length === 0;
    }
    
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0,i);
        if (isRight(rotated)) answer++;
    }
    return answer;
}
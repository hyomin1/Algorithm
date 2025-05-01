function solution(s) {
    var answer = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        let checked = true;
        const stack = [];
        for (let j = 0; j < len; j++) {     
            const c = s[(i+j) % len];
            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
            } else {
                if (stack.length === 0) {
                    checked = false;
                    break;
                } else {
                    const top = stack[stack.length - 1];
                    if (c ===')' && top === '(') stack.pop();
                    else if (c === '}' && top === '{') stack.pop();
                    else if (c ===']' && top === '[') stack.pop();
                }
            }
        }
        if (checked && stack.length === 0) {
            answer++;
        }
            
    }
    return answer;
}
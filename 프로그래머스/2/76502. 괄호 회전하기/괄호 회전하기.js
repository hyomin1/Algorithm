function solution(s) {
    var answer = 0;
    const n = s.length;
    
    for (let i = 0; i < n; i++) {
        const stack = [];
        let isCorrect = true;
        for (let j = 0; j < n; j++) {
            const c = s[(i+j) % n];
            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
            } else {
                if (stack.length === 0) {
                    isCorrect = false;
                    break;
                }
                
                const top = stack[stack.length - 1];
                if (c === ']' && top === '[') stack.pop();
                else if (c === '}' && top === '{') stack.pop();
                else if (c === ')' && top === '(') stack.pop();
                else {
                    isCorrect = false;
                    break;
                }
             }
        }
        if (isCorrect && stack.length === 0) answer++;
    }
    return answer;
}
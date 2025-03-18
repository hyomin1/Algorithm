function isRight(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if(c === '(' || c === '{' || c === '[') stack.push(c);
        else {
            if (stack.length < 1) return false;
            else {
                if (c === ')' && stack[stack.length-1] == '(') stack.pop();
                else if (c === '}' && stack[stack.length-1] === '{') stack.pop();
                else if (c === ']' && stack[stack.length-1] === '[') stack.pop();
            }
            
        }
    }
    return stack.length > 0 ? false : true;
}

function solution(s) {
    var answer = 0;
    const str = s;
    for(let i = 0; i < s.length; i++) {
        const arr = str.split('');
        for(let j = 0; j < i; j++) {
            arr.push(arr.shift());
        }
        s = arr.join('');
        if(isRight(s)) {
            answer++;
        }
    }
    return answer;
}
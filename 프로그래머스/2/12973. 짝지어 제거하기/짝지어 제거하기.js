function solution(s)
{
    let answer = 0;
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const top = stack[stack.length - 1];
        const c = s[i];
        if (stack.length === 0 || top !== c) stack.push(c);
        else if (top === c) stack.pop();
    }
    answer = stack.length === 0 ? 1 : 0;
    return answer;
}
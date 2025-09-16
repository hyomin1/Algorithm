function solution(s)
{
    var answer = -1;

    const stack = [];
    for (const ch of s) {
        if (stack.length === 0) {
            stack.push(ch);
            continue;
        }
        const top = stack[stack.length - 1];
        if (top === ch) stack.pop();
        else stack.push(ch);
    }

    answer = stack.length === 0 ? 1 : 0;
    return answer;
}
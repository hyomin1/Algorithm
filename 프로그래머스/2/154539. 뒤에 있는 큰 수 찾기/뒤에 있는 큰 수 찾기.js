function solution(numbers) {
    var answer = [];
    const stack = [];
    stack.push(0);
    
    for (let i = 1; i < numbers.length; i++) {
        
        while(stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    while(stack.length) {
        answer[stack.pop()] = -1;
    }
    return answer;
}
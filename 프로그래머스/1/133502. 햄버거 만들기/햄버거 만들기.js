function solution(ingredient) {
    var answer = 0;
    const stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        const len = stack.length;
        if(len >= 4 && stack[len -1] === 1) {
            if(stack[len - 2] === 3 && stack[len - 3] === 2 && stack[len - 4] === 1) {
                for(let j = 0; j < 4; j++) stack.pop();
                answer++;
            }
        }
    }
    
    return answer;
}
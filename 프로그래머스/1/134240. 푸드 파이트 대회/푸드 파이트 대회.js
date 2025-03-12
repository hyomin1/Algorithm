function solution(food) {
    let answer = '';
    for(let i = 1; i < food.length; i++) {
        const count = food[i] / 2;
        answer += (i+'').repeat(count);
    }
    const rev = answer.split('').reverse().join('');
   
    answer += '0' + rev;
    
    return answer;
}
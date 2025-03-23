function solution(num) {
    var answer = -1;
    if (num === 1) return 0;
    for(let i = 1; i <= 500; i++) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        if(num === 1) {
            answer = i;
            break;
        } 
    }
    return answer;
}
function solution(dartResult) {
    var answer = 0;
    let curNumber = '';

    const bonus = {'S': 1, 'D':2, 'T':3};
    const option = {'*' : 2, '#': -1};
    const scores = [];
    for(let i = 0; i < dartResult.length; i++) {
        const char = dartResult[i];
        if (!isNaN(char)) {
            curNumber += char;
        }
        else if (bonus[char]) {
            scores.push(Math.pow(Number(curNumber),bonus[char]));
            curNumber = '';
        } else {
           scores[scores.length -1] *= option[char];
           if(char === '*' && scores.length > 1) {
               scores[scores.length - 2] *= option[char];
           }
        }
    }
    
    answer = scores.reduce((sum, score) => sum + score, 0);
    return answer;
}
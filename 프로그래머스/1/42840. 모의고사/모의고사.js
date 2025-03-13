function solution(answers) {
    var answer = [];
    
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const score = [0,0,0];
    
    
    answers.forEach((v,i) => {
        if (one[i%5] === v) score[0]++;
        if (two[i % 8] === v) score[1]++;
        if (three[i % 10] === v) score[2]++;
    })
    
    const max = Math.max(...score);
    
    score.forEach((v,i)=> {
        if (v === max) {
            answer.push(i+1);
        }
    })
   
    return answer;
}
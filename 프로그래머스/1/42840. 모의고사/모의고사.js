function solution(answers) {
    var answer = [];
    const person = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    const obj = {
        1:0,
        2:0,
        3:0
    }
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        for (let j = 0; j < person.length; j++) {
            if (person[j][i % person[j].length] === answer) obj[j+1]++;
        }
        
    }
    const max = Math.max(...Object.values(obj));
    
    
    for (const key in obj) {
        if (max === obj[key]) answer.push(Number(key));
    }
    answer.sort((a,b)=>a-b);
    return answer;
}
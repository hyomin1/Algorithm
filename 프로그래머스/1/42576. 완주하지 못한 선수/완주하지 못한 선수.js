function solution(participant, completion) {
    var answer = '';
    const person = {};
    participant.forEach((v) => {
        if(!person[v]) person[v] = 1;
        else person[v] += 1;
    });
    completion.forEach((v) => {
        person[v]--;
    })
    
    answer = Object.keys(person).filter((v)=> person[v] === 1);
    return answer.join('');
}
function solution(survey, choices) {
    const score = [0,3,2,1,0,1,2,3];
    const info = {'R':0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0};
    var answer = '';
    for (let i = 0; i < survey.length; i++) {
        const c = survey[i];
        const choice = choices[i];
        if(choices[i] < 4) info[c[0]] += score[choice];
        else info[c[1]] += score[choice];
    }
    
    const keys = Object.keys(info);
    
    for(let i = 0; i < keys.length; i+=2) {
        if(info[keys[i]] >= info[keys[i+1]]) answer += keys[i];
        else answer += keys[i+1];
    }
    return answer;
}
function solution(survey, choices) {
    var answer = '';
    const obj = {};
    const arr = ['RT','CF','JM','AN'];
    for (const element of arr) {
        const [s1, s2] = element.split('');
        obj[s1] = 0;
        obj[s2] = 0;
    }
    const MID = 4;
    for (let i = 0; i < survey.length; i++) {
        const [s1,s2] = survey[i].split('');
        const choice = choices[i];
        if (choice < MID) {
            obj[s1] = obj[s1] + (MID - choice);
        } else {
            obj[s2] = obj[s2] + (choice - MID);
        }
    }
    for (const element of arr) {
        const [s1,s2] = element.split('');
        if (obj[s1] > obj[s2]) {
            answer += s1;
        } else if (obj[s1] < obj[s2]) answer += s2;
        else {
            if (s1.localeCompare(s2) < 0) answer += s1;
            else answer += s2;
        }
    }
    return answer;
}
function solution(participant, completion) {
    var answer = '';
    const obj = {};
    for (const p of participant) {
        obj[p] = (obj[p] || 0) + 1;
    }
    
    for (const c of completion) {
        obj[c]--;
    }
    
    for (const key in obj) {
        if (obj[key] > 0) {
            answer = key;
            break;
        }
    }
    return answer;
}
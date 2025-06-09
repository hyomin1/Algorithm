function solution(participant, completion) {
    var answer = '';
    const obj = {};
    for (const p of participant) {
        obj[p] = (obj[p] || 0) + 1;
    }
   
    for (const c of completion) {
        obj[c]--;
    }
     
    const arr = Object.keys(obj);
    for (const key of arr) {
        if (obj[key] > 0) return key;
    } 
    
}
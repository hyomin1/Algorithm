function solution(today, terms, privacies) {
    var answer = [];
    const map = {};
    for (let i = 0; i < terms.length; i++) {
        const [term, duration] = terms[i].split(' ');
        map[term] = Number(duration);
    }
    for (let i = 0; i < privacies.length; i++) {
        const [date, term] = privacies[i].split(' ');
        const duration = map[term];
        
        let [year,month,day] = date.split('.').map(Number);
        
        month += duration;
        year += Math.floor((month - 1) / 12);
        month = (month - 1) % 12 + 1;
        const str = year + '.' + month + '.' + day;
        if(new Date(today).getTime() >= new Date(str).getTime()) {
            answer.push(i+1);
        }
        
    }
    return answer;
}
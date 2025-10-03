function solution(today, terms, privacies) {
    var answer = [];
    
    const term = {};
    for (const t of terms) {
        const [type, month] = t.split(' ');
        term[type] = Number(month);
    }
    const [year, month, day] = today.split('.').map(Number);
    
    for (let i = 0; i < privacies.length; i++) {
        const p = privacies[i];
        const [date, type] = p.split(' ');
        const [pYear, pMonth, pDay] = date.split('.').map(Number);
        let vYear = pYear + Math.floor((pMonth + term[type]) / 12)
        let vMonth = (pMonth + term[type]) % 12;
        if (vMonth === 0) {
            vYear--;
            vMonth = 12;
        }
        let vDay = pDay - 1;
        if (vDay === 0) {
            vMonth--;
            vDay = 28;
        }
        if (vMonth === 0) {
            vMonth = 12;
            vYear--;
        }
      
        if (new Date(year,month,day).getTime() > new Date(vYear,vMonth,vDay).getTime()) answer.push(i+1);
        
    }
    return answer;
}
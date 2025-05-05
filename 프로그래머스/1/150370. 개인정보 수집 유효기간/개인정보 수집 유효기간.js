function solution(today, terms, privacies) {
    var answer = [];
    const term = {};
    for (const t of terms) {
        const [type, month] = t.split(' ');
        term[type] = Number(month);
    }
    const [todayYear, todayMonth, todayDate] = today.split('.').map(Number);
    for (let i = 0; i < privacies.length; i++) {
        const [day, type] = privacies[i].split(' ');
        let [year,month,date] = day.split('.').map(Number);
        const sum = month + term[type];
        year += Math.floor(sum / 12);
        month = sum % 12;
        date = (date - 1) % 28;
        if (new Date(todayYear,todayMonth,todayDate).getTime() > new Date(year,month,date).getTime()) answer.push(i+1);
        
    }
    return answer;
}
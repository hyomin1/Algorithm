function getDay(date) {
    const [y,m,d] = date.split('.').map(Number);
    return y * 12 * 28 + m * 28 + d;
}

function solution(today, terms, privacies) {
    var answer = [];
    const termMap = {};
    for (const t of terms) {
        const [type, month] = t.split(' ');
        termMap[type] = Number(month) * 28;
    }
    const todayDays = getDay(today);
    privacies.forEach((v,i) => {
        const [day, type] = v.split(' ');
        const days = getDay(day) + termMap[type];
        if (todayDays >= days) answer.push(i+1);
    })
    return answer;
}
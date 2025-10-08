function solution(fees, records) {
    var answer = [];
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const car = {};
    for (const r of records) {
        const [time, num, type] = r.split(' ');
        if (!car[num]) car[num] = 0;
        const [hour, minute] = time.split(':').map(Number);
        if (type === 'IN') {
            car[num] -= hour * 60 + minute;
        } else car[num] += hour * 60 + minute;
    }
    for (const num in car) {
        if (car[num] <= 0) car[num] += 23 * 60 + 59;
    }
    const keys = Object.keys(car).sort();
    for (const key of keys) {
        if (car[key] <= baseTime) answer.push(baseFee);
        else {
            answer.push(baseFee + Math.ceil((car[key] - baseTime) / unitTime) * unitFee);
        }
    }
    
    return answer;
}
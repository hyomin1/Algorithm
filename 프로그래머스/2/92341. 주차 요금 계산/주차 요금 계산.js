function solution(fees, records) {
    var answer = [];
    const answerMap = {};
    const parkMap = {};
    for (record of records) {
        const [time,carNum,info] = record.split(' ');
        const [hour,minute] = time.split(':').map(Number);
        if(info === 'IN') {
            parkMap[carNum] = hour * 60 + minute;
        } else { // OUT
            answerMap[carNum] = (answerMap[carNum] || 0) + hour * 60 + minute - parkMap[carNum];
            parkMap[carNum] = -1;
                    
        }
    }
    
    const keys = Object.keys(parkMap);
    const endTime = 60 * 23 + 59;
    for (const key of keys) {
        if(parkMap[key] > -1) {
            const duration = endTime - parkMap[key];
            answerMap[key] = (answerMap[key] || 0) + duration;
        }
    }
    const [basicTime, basicFee, unitTime,unitFee] = fees;
    const answerKeys = Object.keys(answerMap);
    for (const key of answerKeys) {
        if (answerMap[key] <= basicTime) {
            answerMap[key] = basicFee;
        } else {
            const time = answerMap[key] - basicTime;
            answerMap[key] = basicFee + Math.ceil(time / unitTime) * unitFee
        }
    }
    
    answer = Object.keys(answerMap).sort().map((v) => answerMap[v]); 
    return answer;
}
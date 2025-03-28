function solution(progresses, speeds) {
    var answer = [];
    const daysLeft = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    let count = 0;
    let maxDay = daysLeft[0];
    
    for (let i = 0; i < daysLeft.length; i++) {
        if (maxDay >= daysLeft[i]) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = daysLeft[i];
        }
    }
    answer.push(count);
    return answer;
}
function solution(play_time, adv_time, logs) {
    var answer = 0;
    
    function convertTime(time) {
        const [hour, minute, second] = time.split(':').map(Number);
        return hour * 3600 + minute * 60 + second;
    }
    
    const play = convertTime(play_time);
    
    
    const arr = Array(play+1).fill(0);
    
    for (const log of logs) {
        const [start, end] = log.split('-');
        const s = convertTime(start);
        const e = convertTime(end);
        arr[s] += 1;
        arr[e] -= 1;
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1];
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1];
    }
    const adv = convertTime(adv_time);
    let max = -Infinity;
    
    for (let i = 0; i <= play - adv; i++) {
        if (arr[i+adv] - arr[i] > max) {
            max = arr[i+adv] - arr[i];
            answer = i;
        }
    }
    function change(num) {
        if (num === 0) return "00:00:00";
        num++;
        const hour = Math.floor(num/3600) + '';
        const minute = Math.floor((num % 3600) / 60) + '';
        const second = num % 3600 % 60 + '';
        return `${hour.padStart(2,'0')}:${minute.padStart(2,'0')}:${second.padStart(2,'0')}`;
    } 
    answer = change(answer);
    return answer;
}
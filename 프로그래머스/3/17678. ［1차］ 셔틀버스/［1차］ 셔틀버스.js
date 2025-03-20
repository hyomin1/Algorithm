function solution(n, t, m, timetable) {
    var answer = 0;
   
    timetable = timetable.map((v) => {
        const [hour,minute] = v.split(':').map(Number);
        return hour * 60 + minute;
    })
    timetable.sort((a,b)=>a-b);
    let index = 0;
    const bus = [];
    const visited = Array(timetable.length).fill(false);
    for (let i = 0; i < n; i++) {
        let max = m;
        let start = 60 * 9 + t * i;
        let lastTime = 0;
        for (let j = index; j < timetable.length; j++) {
            if(timetable[j] <= start && max > 0) {
                lastTime = timetable[j];
                index++;
                max--;
                if(max === 0) break;
            }
        }
        if (i === n-1) { // 마지막 버스
            if (max > 0) {
                answer = start;
            } else if(max === 0) {
                answer = lastTime - 1;
            }
        }
       
    }
    const hour= Math.floor(answer / 60) + '';
    const minute = answer % 60 + '';
    answer = hour.padStart(2,'0') + ':' + minute.padStart(2,'0'); 
    return answer;
}
function solution(schedules, timelogs, startday) {
    var answer = 0;
    const map = {};
    for (let i = 0; i < schedules.length; i++) {
        let time = schedules[i] + 10;
        if (time % 100 >= 60) {
            time = Math.floor(time / 100) * 100 + 100 + time % 10;
        }
        map[i] = time;
    }
    for(let i = 0; i < timelogs.length; i++) {
        let day = startday;
        let found = true;
        for (let j = 0; j < timelogs[i].length; j++) {
            const holiday = day % 7;
            if(holiday !== 6 && holiday !== 0) {
                if(timelogs[i][j] > map[i]) found = false;
            }
            day++;
            
        }
        if (found) 
            answer++;
    }
    return answer;
}
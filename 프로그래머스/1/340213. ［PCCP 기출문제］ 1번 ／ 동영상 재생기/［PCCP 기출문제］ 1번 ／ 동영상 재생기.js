function isOpening(curPos,start,end) {
    return start <= curPos && curPos <= end;
}

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let curPos = 0;
    let [hour, minute] = pos.split(':').map(Number);
    const [ops_h,ops_m] = op_start.split(':').map(Number);
    const open_s = ops_h * 60 + ops_m;
 
    const [ope_h, ope_m] = op_end.split(':').map(Number);
    const open_e = ope_h * 60 + ope_m;
    curPos = hour * 60 + minute;
    const [video_h, video_e] = video_len.split(':').map(Number);
    const end = video_h * 60 + video_e;
    for (let i = 0; i < commands.length; i++) {
        if (isOpening(curPos,open_s,open_e)) {
                curPos = open_e;
        }
        if (commands[i] === 'prev') {
            if (curPos - 10  < 0) curPos = 0;
            else curPos -= 10;
             if (isOpening(curPos,open_s,open_e)) {
                curPos = open_e;
            }
            
        } else {
            if (end - curPos < 10) curPos = end;
            else curPos += 10;
            if (isOpening(curPos,open_s,open_e)) {
                curPos = open_e;
            }
        }
    }
    hour = Math.floor(curPos / 60) + '';
    minute = curPos % 60 + '';
    
    answer = hour.padStart(2,'0') + ':' + minute.padStart(2,'0');
    return answer;
}
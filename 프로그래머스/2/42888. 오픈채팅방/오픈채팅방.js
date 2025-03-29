function solution(record) {
    var answer = [];
    const obj = {};
    for (let i = 0; i < record.length; i++) {
        const [cmd, uid, nickname] = record[i].split(' ');
        if (cmd === 'Enter' || cmd === 'Change') {
            obj[uid] = nickname;
        }
    }
    for (let i = 0; i < record.length; i++) {
        const [cmd, uid] = record[i].split(' ');
        if (cmd === 'Enter') {
            answer.push(`${obj[uid]}님이 들어왔습니다.`)
        } else if (cmd === 'Leave') answer.push(`${obj[uid]}님이 나갔습니다.`);
    }
    
    return answer;
}
function solution(record) {
    var answer = [];
    const map = {};
    for (const r of record) {
        const [info, uid, name] = r.split(' ');
        if(info === 'Enter' || info === 'Change') map[uid] = name;
        
    }
    for (const r of record) {
        const [info, uid,name] = r.split(' ');
        if (info === 'Enter') 
             answer.push(`${map[uid]}님이 들어왔습니다.`);
        else if (info ==='Leave') answer.push(`${map[uid]}님이 나갔습니다.`);
    }
    return answer;
}
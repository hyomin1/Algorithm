function solution(record) {
    var answer = [];
    const user = {};
    for (const r of record) {
        const [cmd, uid, name] = r.split(' ');
        if (name) {
            user[uid] = name;
        }
    }
    
    for (const r of record) {
        const [cmd, uid] = r.split(' ');
        switch (cmd) {
            case 'Enter':
                answer.push(`${user[uid]}님이 들어왔습니다.`);
                break;
            case 'Leave':
                answer.push(`${user[uid]}님이 나갔습니다.`);
        }
        
    }
    return answer;
}
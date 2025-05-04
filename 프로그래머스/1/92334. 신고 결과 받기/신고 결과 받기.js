function solution(id_list, report, k) {
    var answer = [];
    const map = {};
    const count = {};
    for (const id of id_list) {
        map[id] = [];
        count[id] = 0;
    }
    for (const r of report) {
        const [a, b] = r.split(' ');
        if(!map[a].includes(b)) map[a].push(b);
    }
    
    const keys = Object.keys(map);
    for (const key of keys) {
        map[key].forEach((v) => count[v]++);
    }
    for (const key of keys) {
        let i = 0;
        map[key].forEach((v) => {
            if (count[v] >= k) i++;
        })
        answer.push(i);
    }
    return answer;
}
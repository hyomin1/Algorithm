function solution(id_list, report, k) {
    var answer = [];
    const reportedNumber = {};
    const reportedId = {};
    for (const r of report) {
        const [reporter,reported] = r.split(' ');
        if (!reportedId[reporter]) reportedId[reporter] = [];
        if (!reportedId[reporter].includes(reported)) {
            reportedId[reporter].push(reported);
            reportedNumber[reported] = (reportedNumber[reported] || 0)+1;
        }
        
    }
    const stopped = Object.entries(reportedNumber).filter((v) => v[1] >= k).map((v) => v[0]);

    for (const id of id_list) {
        let count = 0;
        if (!reportedId[id]) {
            answer.push(count);
            continue;
        }
        for (let i = 0; i < reportedId[id].length; i++) {
            if(stopped.includes(reportedId[id][i])) count++;
        }
        answer.push(count);
        
    }
    return answer;
}
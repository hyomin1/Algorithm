function solution(id_list, report, k) {
    var answer = [];
    const reportList = {};
    const reportedNum = {};
    for (const id of id_list) {
        reportList[id] = new Set();
        reportedNum[id] = 0;
    }
    for (const r of report) {
        const [u, v] = r.split(' ');
        reportList[u].add(v);
    }
    for (const u in reportList) {
        for (const v of reportList[u]) {
            reportedNum[v]++;
        }
    }
    let idx = 0;
    for (const u in reportList) {
        let count = 0;
        for (const v of reportList[u]) {
            if (reportedNum[v] >= k) count++;
        }
        answer[idx++] = count;
        
    }
    return answer;
}
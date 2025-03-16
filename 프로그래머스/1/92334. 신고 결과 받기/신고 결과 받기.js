function solution(id_list, report, k) {
    var answer = [];
    const reportMap = {}; // 신고자, 신고 한 사람 목록
    const countMap = {}; // 신고 받은사람 count
    for (let i = 0; i < report.length; i++) {
        const [reporter, reported] = report[i].split(' ');
        if (!reportMap[reporter]) reportMap[reporter] = [];
        if (!reportMap[reporter].includes(reported)) {
            reportMap[reporter] = reportMap[reporter].concat(reported);
            countMap[reported] = (countMap[reported] || 0) + 1;

        }
    }
    //console.log(reportMap,countMap);
    for (let i = 0; i < id_list.length; i++) {
        const reporter = id_list[i];
        let count = 0;

        if (reportMap[reporter]) {
            for (let j = 0; j < reportMap[reporter].length; j++) {
                const reported = reportMap[reporter][j];
                if(countMap[reported] >= k) count++;
            }
        }
        answer.push(count);
    }
    return answer;
}
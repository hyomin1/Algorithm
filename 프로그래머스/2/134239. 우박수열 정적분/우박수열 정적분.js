function solution(k, ranges) {
    var answer = [];
    const arr = [k];
    while (k !== 1) {
        k = k % 2 === 0 ? k / 2 : k * 3 + 1;
        arr.push(k);
    }
    const len = arr.length - 1;
    for (const [x1, x2] of ranges) {
        let sum = 0;
        const start = 0 + x1;
        const end = x2 + len;
        if (start > end) {
            answer.push(-1);
            continue;
        }
        for (let i = start; i < end; i++) {
            sum += (arr[i] + arr[i+1]) / 2
        }
        answer.push(sum);
    }
    return answer;
}
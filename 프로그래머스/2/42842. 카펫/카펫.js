function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    for (let w = total - 1; w >= 1; w--) {
        if (total % w !== 0) continue;
        const h = total / w;
        const y = (w - 2)*(h - 2);
        const b = total - y;
        if (brown === b && yellow === y) {
            answer[0] = w;
            answer[1] = h;
            break;
        }
    }
    return answer;
}
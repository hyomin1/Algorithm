function solution(k, tangerine) {
    var answer = 0;
    const obj = {};
    for (const t of tangerine) {
        obj[t] = (obj[t] || 0) + 1;
    }
    const arr = [...Object.values(obj)].sort((a,b) => b - a);
    for (const element of arr) {
        k -= element;
        answer++;
        if (k <= 0) break;
    }
    return answer;
}
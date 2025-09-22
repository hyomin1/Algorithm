function solution(clothes) {
    var answer = 0;
    const obj = {};
    for (const c of clothes) {
        const [_,type] = c;
        obj[type] = (obj[type] || 0) + 1;
    }
    for (const key in obj) {
        obj[key]++;
    }
    answer = Object.values(obj).reduce((acc,cur) => acc * cur, 1) - 1;

    return answer;
}
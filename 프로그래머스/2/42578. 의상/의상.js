function solution(clothes) {
    var answer = 0;
    const obj = {};
    for (const c of clothes) {
        const [, type] = c;
        obj[type] = (obj[type] || 0) + 1;
    }
    const ans = Object.values(obj).map((v) => v +1);
    answer = ans.reduce((a,b) => a * b, 1) - 1;
    // 모두 안입는 경우 제외, 한 가지 이상은 무조건 입음
    return answer;
}
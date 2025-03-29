function solution(clothes) {
    var answer = 0;
    const obj = {};
    for (const c of clothes) {
        const [cloth, type] = c;
        if(!obj[type]) obj[type] = [];
        obj[type].push(cloth);
    }
    const ans = [];
    for (const key in obj) {
        ans.push(obj[key].length + 1); // 안입는 경우 1가지 씩 추가
    }
    answer = ans.reduce((a,b) => a * b, 1) - 1;
    // 모두 안입는 경우 제외, 한 가지 이상은 무조건 입음
    return answer;
}
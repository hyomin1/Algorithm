function solution(clothes) {
    var answer = 0;
    const map = {};
    for (let i = 0; i < clothes.length; i++) {
        const [cloth, type] = clothes[i];
        if (map[type]) map[type].push(cloth);
        else map[type] = [cloth];
    }
    const arr = Object.keys(map).map((key) => map[key].length);
    answer = arr.reduce((sum,cur) => sum * (cur+1),1);
    answer--;
    return answer;
}
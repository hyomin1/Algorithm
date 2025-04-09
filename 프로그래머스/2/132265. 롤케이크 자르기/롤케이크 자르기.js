function solution(topping) {
    var answer = 0;
    const map = new Map();
    const set = new Set();
    for (const t of topping) {
        map.set(t, (map.get(t) || 0) + 1);
    }
    for (const t of topping) {
        set.add(t);
        map.set(t, map.get(t) - 1);
        if (map.get(t) === 0) map.delete(t);
        
        if (set.size === map.size) answer++;
    }
    return answer;
}
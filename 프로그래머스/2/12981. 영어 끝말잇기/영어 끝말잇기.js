function solution(n, words) {
    var answer = [0, 0];
    const set = new Set();
    set.add(words[0]);
    for (let i = 1; i < words.length; i++) {
        const prev = words[i-1].slice(-1);
        const cur = words[i].slice(0,1);
        if (prev !== cur || set.has(words[i])) {
            answer =[i % n + 1,Math.floor(i / n) + 1];
            break;
        }
        set.add(words[i]);
    }
    return answer;
}
function solution(s) {
    var answer = [];
    s = s.replaceAll('{','');
    s = s.replaceAll('}','');
    s = s.split(',').map((v)=>Number(v));
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const num = s[i];
        map[num] = (map[num] || 0) + 1;
    }
    answer = Object.entries(map).sort((a,b) => b[1] - a[1]);
    answer = answer.map((v) => Number(v[0]));
    return answer;
}
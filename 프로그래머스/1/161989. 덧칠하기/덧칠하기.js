function solution(n, m, section) {
    var answer = 0;
    let painted = 0;
    for (const wall of section) {
        if (wall <= painted) continue;
        
        painted = wall + m - 1;
        answer++;
    }
    return answer;
}
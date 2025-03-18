function solution(n, words) {
    var answer = [0,0];
    const map = {};
    for (let i = 0; i < words.length; i++) {
        map[words[i]] = (map[words[i]] || 0) + 1;
        if (map[words[i]] > 1) {
            answer[0] = (i % n) + 1;
            answer[1] = Math.floor(i / n) + 1;
            break;
        }
        if (i > 0 && words[i][0] !== words[i-1][words[i-1].length-1]) {
             answer[0] = (i % n) + 1;
            answer[1] = Math.floor(i / n) + 1;
            break;
        }
    }

    return answer;
}
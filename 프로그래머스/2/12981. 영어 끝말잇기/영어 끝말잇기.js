function solution(n, words) {
    var answer = [0,0];
    
    const set = new Set();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (i === 0) {
            set.add(word);
            continue;
        }
        if (set.has(word) || words[i-1][words[i-1].length-1] !== word[0]) {
            answer[0] = i % n + 1;
            answer[1] = Math.floor(i/n) + 1;
            return answer;
        }
        set.add(word);
    }
   

    return answer;
}
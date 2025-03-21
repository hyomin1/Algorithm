function checkWord(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) {
            diffCount++;
        }
    }
    return diffCount === 1;
}

function solution(begin, target, words) {
    var answer = 0;
    // 짧은 경로 -> BFS
    const queue = [];
    const set = new Set(); // visited 
    set.add(begin);
    queue.push([begin,0]);
    
    while (queue.length > 0) {
        const [currentWord, step] = queue.shift();
        if (currentWord === target) {
            return step;
        }
        for (const word of words) {
            if(!set.has(word) && checkWord(currentWord,word)) {
                set.add(word);
                queue.push([word,step+1]);
            }
        }
        
    }
    return answer;
}
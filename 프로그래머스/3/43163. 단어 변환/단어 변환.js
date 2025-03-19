function checkWord(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) diffCount++;
        if (diffCount > 1) return false;
    }
    return diffCount === 1 ? true : false;
}

function solution(begin, target, words) {
    let answer = 0;
    if (!words.includes(target)) return answer;
    
    const queue = [[begin,0]];
    const visited = new Set([begin]);
    
    while (queue.length > 0) {
        const [currentWord,step] = queue.shift();
        
        if (currentWord === target) return step;
        
        for (const word of words) {
            if(!visited.has(word) && checkWord(currentWord,word)) {
               queue.push([word,step+1]);
               visited.add(word);
             }
        }
    }
    
    
    return answer;
}
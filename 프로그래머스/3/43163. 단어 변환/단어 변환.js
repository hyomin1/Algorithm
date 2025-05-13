function checkWord(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) count++;
    }
    return count === 1;
}

function solution(begin, target, words) {
    var answer = 0;
    const visited = new Set();
    
  
    const queue = [[begin,0]];
  
    while (queue.length) {
        const [cur,step] = queue.shift();
        if (cur === target) return step;
        
        for (const word of words) {
            if(!visited.has(word) && checkWord(cur,word)) {
                visited.add(word);
                queue.push([word,step+1]);
            }
        }
        
    }
    return answer;
}
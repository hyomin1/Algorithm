function solution(gems) {
    var answer = [0,gems.length-1];
    const map = new Map();
    let start = 0, end = 0;
    const totalCount = new Set(gems).size;
    
    while (end < gems.length) {
        const gem = gems[end];
        map.set(gem, (map.get(gem) || 0) + 1); 
        end++;
        
        while (map.size === totalCount) {
            if (end - start - 1 < answer[1] - answer[0]) {
                answer = [start, end - 1];
            }
            const gem2 = gems[start];
            map.set(gem2, map.get(gem2) - 1);
            if (map.get(gem2) === 0) map.delete(gem2);
            start++;
        }
    }
    return [answer[0]+1, answer[1]+1];
}
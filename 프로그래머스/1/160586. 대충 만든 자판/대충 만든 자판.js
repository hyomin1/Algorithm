function solution(keymap, targets) {
    var answer = [];
    const map = new Map();
    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const k = key[i];
            if (!map.has(k)) {
                map.set(k,i+1);
            } else {
                const min = Math.min(map.get(k),i+1);
                map.set(k,min);
            }
        }
    }
    for (const target of targets) {
        let sum = 0;
        for (const char of target) {
            if (map.get(char)) {
              sum += map.get(char);
            } else {
                answer.push(-1);
                sum = 0;
                break;
            }
        }
        if (sum > 0) answer.push(sum);
    }
    
    return answer;
}
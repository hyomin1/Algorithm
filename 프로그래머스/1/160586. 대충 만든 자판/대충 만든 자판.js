function findKey(keymap,key) {
    let min = Infinity;
    for (let i = 0; i < keymap.length; i++) {
        const index = keymap[i].indexOf(key);
        if (index !== -1) {
            min = Math.min(min,index+1);
        }
    }
    return min === Infinity ? -1 : min;
    
}

function solution(keymap, targets) {
    var answer = [];
    
    for (let i = 0; i < targets.length; i++) {
        let sum = 0;
        let impossible = false;
        for (let j = 0; j < targets[i].length; j++) {
            const count = findKey(keymap,targets[i][j]);
            if (count === -1) {
                impossible = true;
                break;
            }
            sum += count;
        }
        answer.push(impossible ? -1 : sum);
    }
    return answer;
}
function solution(n, k, cmd) {
    const deleted = [];
    
    const up = Array(n+2).fill().map((_,i) => i - 1);
    const down = Array(n+2).fill().map((_,i) => i + 1);
    //console.log(up,down);
    k++;
    
    for (const item of cmd) {
        if (item[0] === 'C') {
            deleted.push(k);
            up[down[k]] = up[k];
            down[up[k]] = down[k];
            k = n < down[k] ? up[k] : down[k];
        } else if (item[0] === 'Z') {
            const restore = deleted.pop();
            down[up[restore]] = restore;
            up[down[restore]] = restore;
        } else {
            const [action, num] = item.split(' ');
            if (action === 'U') {
                for (let i = 0; i < num; i++) {
                    k = up[k];
                }
            } else {
                for (let i = 0; i < num; i++) {
                    k = down[k];
                }
            }
        }
    }
    let answer = Array(n).fill('O');
    for (const i of deleted) {
        answer[i-1] = 'X';
    }
    answer = answer.join('');
    return answer;
}
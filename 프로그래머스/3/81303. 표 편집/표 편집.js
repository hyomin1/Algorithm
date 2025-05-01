function solution(n, k, cmd) {
    var answer = '';
    const stack = [];
    const down = Array(n).fill().map((_,i)=> i+1);
    const up = Array(n).fill().map((_,i) => i-1);
    
    for (const c of cmd) {
        if (c[0] === 'C') {
            stack.push(k);
            up[down[k]] = up[k];
            down[up[k]] = down[k];
            k = down[k] < n ? down[k] : up[k];                                                                 
        } else if (c[0] === 'Z') {
            const restore = stack.pop();
            down[up[restore]] = restore;
            up[down[restore]] = restore;
            
        } else { // U or D
            const [action, num] = c.split(' ');
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
    let arr = Array(n).fill('O');
    for (const num of stack) {
        arr[num] = 'X';
    }
 
    answer = arr.join('');
    return answer;
}
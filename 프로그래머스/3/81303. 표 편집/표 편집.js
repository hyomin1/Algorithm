function solution(n, k, cmd) {
    var answer = '';
    const stack = []; // 최근 삭제된 행
    const up = Array.from({length:n}).map((_,i)=> i-1);
    const down = Array.from({length:n}).map((_,i)=> i+1);
    
    for (const c of cmd) {
        if (c[0] === 'C') {
            stack.push(k);
            up[down[k]] = up[k];
            down[up[k]] = down[k];
            // 행 선택 하기
            k = down[k] < n ? down[k] : up[k];
        } else if (c[0] === 'Z') {
            const undo = stack.pop();
            up[down[undo]] = undo;
            down[up[undo]] = undo;
        } else {
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

    const str = Array.from({length:n}).fill('O');
    for (const num of stack) {
        str[num] = 'X';
    }
    answer = str.join('');
    return answer;
}
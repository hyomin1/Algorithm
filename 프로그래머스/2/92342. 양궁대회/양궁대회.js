function solution(n, info) {
    var answer = [-1];
    const ryan = Array(11).fill(0);
    
    function getScore(ryan,apeach) {
        let rScore = 0;
        let aScore = 0;
        
        for (let i = 0; i <= 10; i++) {
            const k = 10 - i;
            if (ryan[i] === 0 && apeach[i] === 0) continue;
            if (ryan[i] > apeach[i]) rScore += k;
            else aScore += k;
           
        }
        return rScore - aScore;
    }
    let max = -Infinity;
    function dfs(depth, left) {
        if (depth === 11) {
            if (left > 0) ryan[10] += left;
            const diff = getScore(ryan,info);
            
            if (diff > 0) {
                if (diff > max) {
                    max = diff;
                    answer = [...ryan];
                } else if (diff === max) {
                    for (let i = 10; i >= 0; i--) {
                        if (ryan[i] > answer[i]) {
                            answer = [...ryan];
                            break;
                        } else if (ryan[i] < answer[i]) break;
                    }
                }
            }
            if (left > 0) ryan[10] -=left;
            return;
        }
        
        if (left > info[depth]) {
            ryan[depth] = info[depth] + 1;
            dfs(depth+1, left - (info[depth] + 1));
            ryan[depth] = 0;
        }
        dfs(depth+1, left);
    }
    
    dfs(0,n)
    return answer;
}
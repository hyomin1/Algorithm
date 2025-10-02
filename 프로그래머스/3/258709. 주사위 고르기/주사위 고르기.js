function solution(dice) {
    var answer = [];
    const N = dice.length;
    const diceNum = Array.from({length:N}, (_,i) => i);
    
    function dfs(arr, n, start, path,res) {
        if (path.length === n) {
            res.push([...path]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            path.push(i);
            dfs(arr,n,i+1, path, res);
            path.pop();
        }
        
        return res;
        
    }
    const combs = dfs(dice, N/2, 0, [], [])
    
    function getDist(choose, dice) {
        let dist = {0:1};
        
        for (const index of choose) {
            const next = {};
            
            for (const sum in dist) {
                for (const value of dice[index]) {
                    const newValue = Number(sum) + value;
                    next[newValue] = (next[newValue] || 0) + dist[sum];
                }
            }
            dist = next;
        }
        return dist;
    }
    
    function getWinner(distA,distB) {
        let win = 0;
        let total = 0;
        
        for (const [sumA, countA] of Object.entries(distA)) {
            for (const [sumB, countB] of Object.entries(distB)) {
                total += countA * countB
                if (Number(sumA) > Number(sumB)) {
                    win += countA * countB;
                }
            }
        }
        
        return win / total;
    }
    let max = -Infinity;
    for (const A of combs) {
        const B = diceNum.filter((v) => !A.includes(v));
        
        const distA = getDist(A,dice);
        const distB = getDist(B,dice);
        
        const ratio = getWinner(distA,distB);
        if (ratio > max) {
            max = ratio;
            answer = A.map((v) => v+1);
        }
    }
    
    return answer;
}
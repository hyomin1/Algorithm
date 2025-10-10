function solution(relation) {
    var answer = 0;
    
    const comb = [];
    function dfs(start, path) {
        if (path.length > 0) comb.push([...path]);
        for (let i = start; i < relation[0].length; i++) {
            path.push(i);
            dfs(i+1, path);
            path.pop();
        }
    }
    dfs(0,[]);
    comb.sort((a,b) => a.length - b.length);
    const candidates = [];
    for (const c of comb) {
        const set = new Set();
        for (const r of relation) {
            const key = c.map((v) => r[v]).join(',');
            set.add(key);
        }
        if (set.size === relation.length) {
            const check = candidates.every((cand) => {
                return !cand.every((v) => c.includes(v));
            });
            
            if (check) candidates.push(c);
        }
      
    }
    
    return candidates.length;
}
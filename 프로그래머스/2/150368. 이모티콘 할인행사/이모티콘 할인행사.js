function solution(users, emoticons) {
    var answer = [0,0];
    const m = emoticons.length;
    const discounts = [40,30,20,10];
    
    const comb = [];
    function dfs(depth, path) {
        if (depth === m) {
            comb.push([...path]);
            return;
        }
        for (const d of discounts) {
            path.push(d);
            dfs(depth+1, path);
            path.pop();
        }
    }
    dfs(0,[]);
    
   
   
    
    for (const c of comb) {
        let emoticonPlus = 0;
        let sale = 0;
        for (const [minDiscount, criterion] of users) {
            let spend = 0;
            for (let i = 0; i < emoticons.length; i++) {
                if (c[i] >= minDiscount) {
                    spend += emoticons[i] - (emoticons[i] * c[i] / 100); 
                }
            }
            if (spend >= criterion) {
                emoticonPlus++;
            } else sale += spend;
            
        }
        if (emoticonPlus > answer[0] || 
            (emoticonPlus === answer[0] && sale > answer[1])) {
            answer = [emoticonPlus, sale];
        }
    }
  
    return answer;
}
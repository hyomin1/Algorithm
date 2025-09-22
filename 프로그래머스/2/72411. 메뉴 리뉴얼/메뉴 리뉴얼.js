function solution(orders, course) {
    var answer = [];
    
    function dfs(menus, start, depth, maxDepth,path,setMenu) {
        if (depth === maxDepth) {
            const key = path.join('');
            setMenu[key] = (setMenu[key] || 0) + 1;
            return;
        }
        for (let i = start; i < menus.length; i++) {
            path.push(menus[i]);
            dfs(menus,i+1,depth+1, maxDepth, path,setMenu);
            path.pop();
            
        }
    }
    
    for (const c of course) {
        const setMenu = {};
        for (const order of orders) {
            const sorted = order.split('').sort();
            if (sorted.length < c) continue;
            dfs(sorted,0,0,c,[],setMenu);
        }
        
        const max = Math.max(...Object.values(setMenu));
        for (const key in setMenu) {
            if (setMenu[key] === max && max >= 2) {
                answer.push(key);
            }
        }
    }
    answer.sort();
    return answer;
}
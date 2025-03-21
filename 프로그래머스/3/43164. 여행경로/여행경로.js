function dfs(start, tickets, used, answer) {
    answer.push(start);
    
    if (answer.length === tickets.length + 1) return true;
    for (let i = 0; i < tickets.length; i++) {
        const [src, dest] = tickets[i];
        
        if(!used[i] && start === src) {
            used[i] = true;
            
            if (dfs(dest,tickets,used,answer)) return true;
            used[i] = false;
            answer.pop();
        }
    }
    return false;
}

function solution(tickets) {
    var answer = [];
    tickets.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1].localeCompare(b[1]);
        }
        return a[0].localeCompare(b[0]);
    })
    const used = Array(tickets.length).fill(false);
    dfs('ICN',tickets,used,answer);
    return answer;
    
}
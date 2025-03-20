function dfs(currentNode, graph, used, tickets, answer) {
    answer.push(currentNode);
    
    if(answer.length === tickets.length + 1) return true;
    if(graph[currentNode]) {
        for (const nextNode of graph[currentNode]) {
            const index = tickets.findIndex((ticket,index) => !used[index] && currentNode === ticket[0] && nextNode === ticket[1])
            if (index !== -1) {
                used[index] = true;
                if(dfs(nextNode,graph,used,tickets,answer)) return true;
                used[index] = false;
            }
        }
    }
    answer.pop();
   
}

function solution(tickets) {
    var answer = [];
    const graph = {};
    tickets.sort((a,b) => {
        if (a[0] === b[0]) return a[1].localeCompare(b[1]);
        return a[0].localeCompare(b[0]);
    });
    for (let i = 0; i < tickets.length; i++) {
        const [start, end] = tickets[i];
        if(graph[start]) graph[start].push(end);
        else graph[start] = [end];
    }
    const used = Array(tickets.length).fill(false);
    dfs('ICN',graph, used, tickets, answer);
    return answer;
}
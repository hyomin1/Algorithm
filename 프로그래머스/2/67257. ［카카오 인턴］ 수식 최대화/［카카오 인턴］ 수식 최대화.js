function calculate(order,ex) {
    ex = ex.split(/(\+|\-|\*)/).map((v) => !isNaN(v) ? Number(v) : v);
    
    for (const op of order) {
        let i = 1;
        while(i < ex.length) {
            if(ex[i] === op) {
                const left = ex[i-1];
                const right = ex[i+1];
                let res = 0;
                switch(op) {
                    case '-':
                        res = left - right;
                        break;
                    case '+':
                        res = left + right;
                        break;
                    case '*':
                        res = left * right;
                }
                ex.splice(i-1,3,res);
                i--;
                
            } else i++;
        }
    }
    return Math.abs(ex[0])
    
    
    

}
const ans = [];
function dfs(depth,op,visited,currentOrder,ex) { 
    if (depth === op.length) {
        ans.push(calculate(currentOrder,ex));
    }
    for (let i = 0; i < op.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            currentOrder.push(op[i]);
            dfs(depth+1,op,visited,currentOrder,ex);
            visited[i] = false;
            currentOrder.pop();
        }
    }
}

function solution(expression) {
    var answer = 0;
    const ex = expression;
    expression = expression.replace(/\d/g,'');
    const op = [...new Set(expression.split(''))];
    const n = op.length;
    const visited = new Array(n).fill(false);
    dfs(0,op,visited,[],ex);
    return Math.max(...ans);
}
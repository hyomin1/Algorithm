function isMatch(userId,bannedId) {
    if (userId.length !== bannedId.length) return false;
    for (let i = 0; i < userId.length; i++) {
        if (bannedId[i] === '*') continue;
        if (userId[i] !== bannedId[i]) return false;
    }
    return true;
}

function solution(user_id, banned_id) {
    var answer = 0;
    const arr = Array(banned_id.length).fill().map(()=>[]);
    for (let i = 0; i < user_id.length; i++) {
        for (let j = 0; j < banned_id.length; j++) {
            if(isMatch(user_id[i], banned_id[j])) {
                arr[j].push(user_id[i]);
            }
        }
    }
    const result = new Set();
    function dfs(depth, path) {
        if (depth === arr.length) {
            result.add([...path].sort().join(''));
            return;
        }
        for (const user of arr[depth]) {
            if (path.has(user)) continue;
            path.add(user);
            dfs(depth+1, path);
            path.delete(user);
        }
    }
    dfs(0,new Set());
    answer = result.size;
    return answer;
}
function solution(word) {
    var answer = 0;
    const map = [];
    const words = ['A','E','I','O','U'];
    function dfs(w,depth) {
        map.push(w);
        if(depth === words.length) {
            return;
        }
        for (let i = 0; i < words.length; i++) {
            dfs(w + words[i],depth + 1);
        }
    }
    dfs('',0);
    answer = map.indexOf(word);
    return answer;
}
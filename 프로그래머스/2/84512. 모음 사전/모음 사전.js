const dict = [];
const words = ['A','E','I','O','U'];

function dfs(word,depth) {
    dict.push(word);
    if(depth === 5) return;
    for (let i = 0; i < words.length; i++) {
        dfs(word + words[i],depth + 1);
    }
}

function solution(word) {
    var answer = 0;    
    dfs("",0);
    answer = dict.indexOf(word);
    return answer;
}
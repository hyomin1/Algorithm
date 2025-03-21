function dfs(word,depth,dict,words) {
    dict.push(word);
    if(depth === words.length) return;
    for(let i = 0; i < words.length; i++) {
        dfs(word + words[i],depth+1,dict,words);
    }
}

function solution(word) {
    var answer = 0;
    const words = ['A','E','I','O','U'];
    const dict = [];
    dfs("",0,dict,words);
    answer = dict.indexOf(word);
    return answer;
}
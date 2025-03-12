function solution(t, p) {
    var answer = 0;
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let number = '';
        for(let j = i; j < i + p.length; j++) {
            number += t[j];
        }
        if(parseInt(number) <= parseInt(p)) answer++;
    }
    return answer;
}
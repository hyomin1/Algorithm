function seperate(str) {
    let cnt1 = 0, cnt2 = 0;
   
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c === '(') cnt1++;
        else cnt2++;
        if (cnt1 === cnt2) return i;
    }
    return str.length - 1;
}

function isCorrect(str) {
    const stack = [];
     for (let i = 0; i < str.length; i++) {
         if (str[i] === '(') stack.push(str[i]);
         else {
             if (stack.length === 0) return false;
             stack.pop();
         }
    }
    return stack.length === 0;
}

function reverse(str) {
    let s = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') s += ')'
        else s += '(';
    }
    return s;
}

function solution(p) {
    var answer = '';
    if (p === '') return '';
    
    const index = seperate(p);
    const u = p.slice(0,index+1);
    const v = p.slice(index+1);
    
    if (isCorrect(u)) {
        return u + solution(v);
    } else {
        return '(' + solution(v) + ')' + reverse(u.slice(1,-1));
    }
    return answer;
}
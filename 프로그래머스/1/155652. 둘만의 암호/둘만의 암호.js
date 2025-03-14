function skipAlphabet(alpha, index, skip) {
    let code = alpha.charCodeAt(0);
    while (index > 0) {
        code = (code - 97 + 1) % 26 + 97;
        if(!skip.includes(String.fromCharCode(code)))
            index--;
    }
    
    return code;
}



function solution(s, skip, index) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        let code = skipAlphabet(s[i],index,skip); 
        answer += String.fromCharCode(code);
    }
    return answer;
}
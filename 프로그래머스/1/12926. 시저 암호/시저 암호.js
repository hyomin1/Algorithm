function changeCharCode(c,n, number) {
    
    c = c.charCodeAt(c) + n;
    c = (c - number) % 26 + number;
    return String.fromCharCode(c);
}

function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if(c >= 'a' && c <= 'z') {
           answer += changeCharCode(c,n,97);
        }
        else if(c >='A' && c <='Z') {
            answer += changeCharCode(c,n,65);
        }
        else {
            answer += c;
        }
      
        
    }
    return answer;
}
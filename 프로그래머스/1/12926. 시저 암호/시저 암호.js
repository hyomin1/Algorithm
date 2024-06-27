function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if(c >= 'a' && c <= 'z') {
            c = c.charCodeAt(c) + n;
            c = (c-97) % 26 + 97;
            answer += String.fromCharCode(c);
        } 
        else if (c >='A' && c <='Z') {
            c = c.charCodeAt(c) + n;
            c = (c-65) % 26 + 65;
            answer += String.fromCharCode(c);
        }
        else answer += c;
    }
    return answer;
}
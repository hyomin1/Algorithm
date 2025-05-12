function solution(s) {
    var answer = s.length;
    
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let str = '';
        let prev = s.slice(0,i);
        let count = 1;
        
        for (let j = i; j < s.length; j += i) {
            const cur = s.slice(j, j + i);
            if (prev === cur) count++;
            else {
                str += (count > 1 ? count : '') + prev;
                prev = cur;
                count = 1;
            }
        }
        str += (count > 1 ? count : '') + prev;
        answer = Math.min(answer,str.length);
    }
    return answer;
}
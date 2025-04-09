function solution(s) {
    var answer = [];
    let zeroCount = 0;
    let count = 0;
    while(true) {
        if(s === '1') break;
        count++;
        for(let i = 0; i < s.length; i++) {
            if (s[i] === '0') zeroCount++;
        }
        s = s.replaceAll('0','');
        s = s.length.toString(2);

    }
    
    answer = [count,zeroCount];
    return answer;
}
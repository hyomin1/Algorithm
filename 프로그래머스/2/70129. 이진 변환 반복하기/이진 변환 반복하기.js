function solution(s) {
    var answer = [];
    let zeroCount = 0;
    let count = 0;
    while(s !== '1') {
        count++;
        zeroCount += s.split('').filter((v) => v === '0').length;
        s = s.replaceAll('0','');
        s = s.length.toString(2);

    }
    
    answer = [count,zeroCount];
    return answer;
}
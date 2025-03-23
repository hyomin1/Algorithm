function solution(s){
    var answer = true;
    s = s.toLowerCase();
    const pCount = s.split('').filter((v) => v === 'p').length;
    const yCount = s.split('').filter((v) => v === 'y').length;
    answer = pCount === yCount ? true : false;
    return answer;
}
function solution(s) {
    let lower = [];
    let upper = [];
    let answer = '';
    for (const str of s) {
        if (str >= 'a' && str <= 'z') lower.push(str);
        else upper.push(str)
    }
    lower.sort().reverse();
    upper.sort().reverse();
    answer = lower.join('') + upper.join(''); 

    return answer;
}
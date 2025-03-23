function countDivisor(num) {
    const sq = Math.floor(Math.sqrt(num));
    let count = 0;
    for (let i = 1; i <= sq; i++) {
        if (num % i === 0) count+=2;
    }
    if(sq*sq === num) count--;
    return count;
}

function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++) {
        if(countDivisor(i) % 2 === 0) answer +=i;
        else answer -= i;
    }
    return answer;
}
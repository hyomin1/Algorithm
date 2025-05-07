function isPrime(n) {
    if (n < 2) return false;
    
    const sq = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= sq; i++) {
        if (n % i === 0) return false; 
    }
    return true;
}

function solution(n, k) {
    var answer = 0;
    n = n.toString(k);
    n = n.split('0').map(Number);
    n.forEach((v) => {
        if (isPrime(v)) answer++;
    })
    return answer;
}
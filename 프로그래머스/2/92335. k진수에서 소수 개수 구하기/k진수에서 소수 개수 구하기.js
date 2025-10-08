function solution(n, k) {
    var answer = 0;
    const arr = n.toString(k).split('0').map(Number);
    
    function isPrime(n) {
        if (n < 2) return false;
        const sq = Math.floor(Math.sqrt(n));
        for (let i = 2; i <= sq; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    for (const num of arr) {
        if (isPrime(num)) answer++;
    }
    return answer;
}
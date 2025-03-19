function isPrime(num) {
    if (num < 2) return false;
    const sq = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sq; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    var answer = 0;
    const str = n.toString(k);
    const arr = str.split('0');
    for (let i = 0; i < arr.length; i++) {
        const num = parseInt(arr[i]);
        if(!Number.isNaN(num) && isPrime(num)) {
            answer++;
        }
    }
    return answer;
}
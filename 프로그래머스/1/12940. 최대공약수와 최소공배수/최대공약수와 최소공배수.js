function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function solution(n, m) {
    var answer = [];
    const max = gcd(n,m);
    const min = n * m / max;
    answer = [max,min];
    return answer;
}
function getGcd(a,b) {
    return b === 0 ? a : getGcd(b, a % b);
}

function getLcm(a,b) {
    return (a * b) / getGcd(a,b);
}

function solution(arr) {
    return arr.reduce((acc,cur) => getLcm(acc,cur));
    
}
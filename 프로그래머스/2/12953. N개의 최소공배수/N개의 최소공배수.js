function getGcd(a,b) {
    if (b === 0) return a;
    return getGcd(b, a % b);
}

function solution(arr) {
    if (arr.length === 1) return arr[0];
    let lcm = arr[0] * arr[1] / getGcd(arr[0],arr[1]);
    if (arr.length === 2) return lcm;
    for (let i = 2; i < arr.length; i++) {
        lcm = lcm * arr[i] / getGcd(lcm,arr[i]);
        
    }
    return lcm;
}
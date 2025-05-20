function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b ,a % b);
}

function arrayGcd(arr) {
    return arr.reduce((acc,cur) => gcd(acc,cur));
}

function solution(arrayA, arrayB) {
    var answer = 0;
    const len = arrayA.length;
    let a1 = arrayGcd(arrayA);
    let a2 = arrayGcd(arrayB);
    
   
    let checked1 = false, checked2 = false;
    for (let i = 0; i < len; i++) {
        if (arrayB[i] % a1 === 0) {
            checked2 = true;
        }
        if (arrayA[i] % a2 === 0) {
            checked1 = true;
        }
    }
    if (checked1 && checked2) return 0;
    else if (checked1 && !checked2) {
        return a1;
    } else if (!checked1 && checked2) return a2;
    else return Math.max(a1,a2);
    
}
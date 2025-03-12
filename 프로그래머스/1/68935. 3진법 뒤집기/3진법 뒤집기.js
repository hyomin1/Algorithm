function solution(n) {
    let answer = 0;
    const arr = [];
    while (n > 2) {
        arr.push(n % 3);
        n = Math.floor(n /3);
    }
    arr.push(n);
    arr.reverse();
    const str = arr.join('');
    for (let i = 0; i < str.length; i++) {
        answer += parseInt(str[i]) * (3 ** i);
    }
    return answer;
}
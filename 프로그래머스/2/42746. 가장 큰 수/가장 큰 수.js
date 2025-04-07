function solution(numbers) {
    var answer = '';
    numbers.sort((a,b) => {
        const t1 = a.toString() + b.toString();
        const t2 = b.toString() + a.toString();
        return t2 - t1;
    });
    answer = numbers.join('');
    return Number(answer ) === 0 ? '0' : answer;
}
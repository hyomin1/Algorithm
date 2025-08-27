function solution(money) {
    var answer = [];
    const count = Math.floor(money/5500);
    const remainder = money - count * 5500;
    answer = [count,remainder];
    return answer;
}
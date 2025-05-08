function solution(numbers) {
    var answer = [];
    for (const number of numbers) {
        // 짝수는 다음 수랑 비트가 1개 다름
        if (number % 2 === 0) answer.push(number+1);
        else {
            let bin = '0' + number.toString(2);
            let index = bin.lastIndexOf('01');
            bin = bin.substring(0,index) + '10' + bin.substring(index+2);
            answer.push(parseInt(bin,2));
        }
    }
    return answer;
}
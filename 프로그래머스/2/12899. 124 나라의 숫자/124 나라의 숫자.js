function solution(n) {
    var answer = '';
    const nums = ['4','1','2'];
    while (n > 0) {
        answer = nums[n % 3] + answer;
        n = Math.floor((n-1)/3);
    }
    return answer;
}
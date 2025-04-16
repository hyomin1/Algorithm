function solution(number, k) {
    var answer = '';
    const arr = [];
    for (let i = 0; i < number.length; i++) {
        while (k > 0 && arr[arr.length-1] < number[i]) {
            arr.pop();
            k--;
        }
        arr.push(number[i]);
    }
    
    answer = arr.slice(0,arr.length - k).join('');
    return answer;
}
function solution(sequence) {
    var answer = 0;
    const length = sequence.length;
    const arr1 = Array.from({length}).fill(0);
    const arr2 = Array.from({length}).fill(0);
    for (let i = 0; i < length; i++) {
        const plus = sequence[i] * 1;
        const minus = sequence[i] * -1;
        if (i % 2 === 0) {
            arr1[i] = plus;
            arr2[i] = minus;
        } else {
            arr1[i] = minus;
            arr2[i] = plus;
        }
    }
    function cal(arr) {
        let current = arr[0];
        let max = arr[0];
        for (let i = 1; i < length; i++) {
            current = Math.max(arr[i],current + arr[i]);
            max = Math.max(current,max);
        }
        return max;
    }
    answer = Math.max(cal(arr1),cal(arr2));
    return answer;
}
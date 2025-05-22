function solution(data, col, row_begin, row_end) {
    var answer = 0;
    data.sort((a,b) => {
        if (a[col-1] === b[col-1]) {
            return b[0] - a[0];
        }
        return a[col-1] - b[col-1];
    });
    const arr = [];
    
    for (let i = row_begin; i <= row_end; i++) {
        let sum = 0;
        for (let j = 0; j < data[i-1].length; j++) {
            sum += data[i-1][j] % i;
        }
        arr.push(sum);
    }
    answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        answer = answer ^ arr[i];
    }
    return answer;
}
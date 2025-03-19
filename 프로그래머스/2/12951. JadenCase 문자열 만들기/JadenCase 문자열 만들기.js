function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    const ans = [];
    const arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let str = '';
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
            if (j ===0 && 'a' <= arr[i][j] && arr[i][j] <= 'z') str += arr[i][j].toUpperCase();
            else str += arr[i][j];
            
        }
    ans.push(str);
    }
    answer = ans.join(' ');
    return answer;
}
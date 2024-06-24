function solution(s) {
    let arr = s.split(" ");
    console.log(arr);
    arr.sort((a,b) => a - b);
    let last = arr.length - 1;
    var answer = arr[0] + " " +arr[last];
    return answer;
}
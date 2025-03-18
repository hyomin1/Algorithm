function solution(progresses, speeds) {
    var answer = [];
    const arr = [];
    for (let i = 0; i < progresses.length; i++) {
        const remain = 100 - progresses[i];
        if (remain % speeds[i] === 0) {
            arr.push(remain / speeds[i]);
        } else {
            arr.push(Math.floor(remain/ speeds[i]) + 1);
        }
    }
    
    let min = arr[0];
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (min < arr[i]) {
            answer.push(count);
            min = arr[i];
            count = 1;
        } else {
            count++;
        }
    }
    answer.push(count);
    return answer;
}
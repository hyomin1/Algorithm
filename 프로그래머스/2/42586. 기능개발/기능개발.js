function solution(progresses, speeds) {
    var answer = [];
    const queue = [];
    for (let i = 0; i < progresses.length; i++) {
        queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    let max = queue[0];
    let count = 0;
    for (let i = 0; i < queue.length; i++) {
        if (max >= queue[i]) {
            count++;
        } else {
            answer.push(count);
            max = queue[i];
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}
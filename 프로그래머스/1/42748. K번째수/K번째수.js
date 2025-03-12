function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++) {
        const [start, end, pos] = commands[i];
        const newArr = array.slice(start-1,end).sort((a,b)=>a-b);
        answer.push(newArr[pos-1])
    }
    return answer;
}
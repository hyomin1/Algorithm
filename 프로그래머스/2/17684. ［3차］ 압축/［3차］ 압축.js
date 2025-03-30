function solution(msg) {
    var answer = [];
    const obj = {};
    let index = 1;
    for(let i = 65; i <= 90; i++) {
        obj[String.fromCharCode(i)] = index++;
    }
    let i = 0;
    while (i < msg.length) {
        let w = msg[i];
        let c = '';

        for (let j = i + 1; j <= msg.length; j++) {
            
            c = msg[j];
            if(obj[w+c]) {
                w = w + c;
            } else {
                answer.push(obj[w]);
                obj[w+c] = index++;
                i = j;
                break;
            }
        }
    }
    return answer;
}
function solution(msg) {
    var answer = [];
    const map = {};
    let index = 1;
    for (let c = 65; c <= 90; c++) {
        map[String.fromCharCode(c)] = index++;
    }
    
    let w = msg[0]; // K
    for (let i = 1; i < msg.length; i++) {
        const c = msg[i]; //A
        const wc = w + c; // KA
        
        if(map[wc]) { // KA
            w = wc; 
        } else {
            answer.push(map[w]);
            map[wc] = index++;
            w = c; 
        }
    }
    answer.push(map[w]);
    return answer;
}
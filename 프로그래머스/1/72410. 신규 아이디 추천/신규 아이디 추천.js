function solution(new_id) {
    let answer = '';
    // 1단계
    answer = new_id.toLowerCase();
    // 2단계
    let regex = /[^a-z0-9\-_.]/g;
    answer = answer.replace(regex,"");
    // 3단계
    regex = /\.{2,}/g;
    answer = answer.replace(regex,'.');
    // 4단계
    if(answer.startsWith('.')) answer = answer.slice(1);
    if(answer.endsWith('.')) answer = answer.slice(0,answer.length);
    
    // 5단계
    if (answer === '') answer = 'a';
    // 6단계
    if (answer.length >= 16) answer = answer.slice(0,15);
    if (answer.endsWith('.')) answer = answer.slice(0,answer.length-1);
    // 7단계
    if (answer.length <= 2) {
        for (let i = answer.length; i < 3; i++) {
            answer += answer[answer.length - 1];
        }
    }
    return answer;
}
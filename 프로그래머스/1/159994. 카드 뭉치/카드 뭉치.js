function solution(cards1, cards2, goal) {
    var answer = '';
    let check = true;
    for (const word of goal) {
        if (cards1[0] === word) cards1.shift();
        else if (cards2[0] === word) cards2.shift();
        else {
            check = false;
            break;
        }
    }
   
    answer = check ? 'Yes' : 'No'
    return answer;
}
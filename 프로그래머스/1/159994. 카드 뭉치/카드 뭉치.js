function solution(cards1, cards2, goal) {
    var answer = '';
    let check = true;
    for(let i = 0; i < goal.length; i++) {
        const v = goal[i];
        if (cards1[0] === v) cards1.shift();
        else if (cards2[0] === v) cards2.shift();
        else {
            check = false;
            break;
        }
    }
    return check ? 'Yes' : 'No';
    
}
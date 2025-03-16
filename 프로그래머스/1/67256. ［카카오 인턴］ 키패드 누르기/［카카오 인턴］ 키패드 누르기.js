const phone = [[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9],
                   [-1,0,-1]];
    

function findPosition(position) {
    let x = 0, y = 0;
    for(let i = 0; i < phone.length; i++) {
        for (let j = 0; j < phone[i].length; j++) {
            if(position === phone[i][j]) {
                y = i;
                x = j;
            }
        }
    }
    return [y, x];
}

function calDistance(lf,rf,position,hand) {
    const L =Math.abs(lf[0]-position[0]) + Math.abs(lf[1] -  position[1]);
    const R = Math.abs(rf[0]-position[0]) + Math.abs(rf[1] - position[1]);
    if (L < R) return 'L';
    else if (R < L) return 'R';
    else {
        if (hand === 'left') return 'L';
        else return 'R';
    }
}
function solution(numbers, hand) {
    var answer = '';
    const left = [1,4,7];
    const right = [3,6,9];
    let lf = [3, 0];
    let rf = [3, 2];
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if(left.includes(number)) {
            answer += 'L';
            lf = findPosition(number);
        } else if(right.includes(number)) {
            answer += 'R';
            rf = findPosition(number);
        } else {
            let position = [];
            position = findPosition(number);
            const find = calDistance(lf,rf,position,hand);
            if (find === 'L') lf = position;
            else rf = position;
            answer += find;
        }
    }
    return answer;
}
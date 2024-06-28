function solution(numbers, hand) {
    var answer = '';
    let keypad = [
        [1,2,3],[4,5,6],[7,8,9],[-1,0,-1]
    ];
    let left = [3,0], right = [3,2];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < keypad.length; j++) {
            for(let k = 0; k < keypad[j].length; k++) {
                if(numbers[i] == keypad[j][k]) {
                    if(k === 0) {
                        answer += 'L';
                        left[0] = j, left[1] = k;
                    }
                    else if(k == 2) {
                        answer += 'R';
                        right[0] = j, right[1] = k;
                    }
                    else {
                     let l = Math.abs(left[0] -j) + Math.abs(left[1] - k);
                        let r = Math.abs(right[0]-j) + Math.abs(right[1] - k);
                        if (l < r) {
                            answer += 'L';
                            left[0] = j;
                            left[1] = k;
                        }
                        else if (r < l) {
                            answer += 'R';
                            right[0] = j;
                            right[1] = k;
                        }
                        else {
                            if(hand === "left") {
                                answer += 'L';
                                left[0] = j;
                                left[1] = k;
                            }
                            else {
                                answer +='R';
                                right[0] = j;
                                right[1] = k;
                            }
                        }
                    }
                }
            }
        }
    }
    return answer;
}
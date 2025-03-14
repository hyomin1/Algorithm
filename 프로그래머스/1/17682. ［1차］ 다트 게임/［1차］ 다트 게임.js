function solution(dartResult) {
    var answer = 0;
    let str = '';
    let index = -1;
    const nums = [];
    for(let i = 0; i < dartResult.length; i++) {
        const c = dartResult[i];
        if (c >= '0' && c <= '9') {
            str += c;
        }
        else if (c === 'S' || c === 'D' || c === 'T') {
            let num = parseInt(str);
            
            index++;
            if (c === 'S') {
               num **=  1; 
            } else if (c === 'D') {
                num **= 2;
            } else num **= 3; 
            str = '';
            nums[index] = num;
        } else {
            if (c === '*') {
                nums[index] *= 2;
                if (index > 0) nums[index - 1] *= 2;
            } else {
                nums[index] *= -1
            }
        }
    }
    nums.forEach((num) => answer += num);
    return answer;
}
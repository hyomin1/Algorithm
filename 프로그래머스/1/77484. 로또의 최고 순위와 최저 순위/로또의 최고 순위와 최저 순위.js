function calPrize(num) {
    switch (num) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}

function solution(lottos, win_nums) {
    var answer = [];
    const zeroCount = lottos.reduce((count,v) =>{
        return v === 0 ? count + 1 : count;
    },0);
    lottos = lottos.filter((v) => v !== 0);
    let winCount = 0;
    for(let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < win_nums.length; j++) {
            if(lottos[i] === win_nums[j]) {
                winCount++;
                break;
            }
        }
    }
    answer.push(calPrize(zeroCount + winCount));
    answer.push(calPrize(winCount));
    
    
    return answer;
}
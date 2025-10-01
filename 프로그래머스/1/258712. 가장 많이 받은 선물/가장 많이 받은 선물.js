function solution(friends, gifts) {
    var answer = 0;
    const give = {};
    const receive = {};
    const giftPoint = {}; // 선물 지수
    const list = {};  // 선물 거래 내역
    const result = {};
    for (const f of friends) {
        give[f] = 0;
        receive[f] = 0;
        list[f] = {};
        result[f] = 0;
    }
       
    for (const gift of gifts) {
        const [A, B] = gift.split(' ');
        give[A]++;
        receive[B]++;
        list[A][B] = (list[A][B] || 0) + 1;
    }
    for (const f of friends) {
        giftPoint[f] = give[f] - receive[f];
    }
    for (const g of friends) {
        for (const r of friends) {
            if (g === r) continue; // 동일인물 제외
            if (list[g][r] && !list[r][g]) {
                result[g]++;
                continue;
            }
            if (!list[g][r] && list[r][g]) {
                result[r]++;
                continue;
            }
            if (list[g][r] && list[r][g]) { // 주고 받은 기록 존재
                if (list[g][r] > list[r][g]) result[g]++;
                else if (list[g][r] < list[r][g]) result[r]++;
                else {
                    if (giftPoint[g] > giftPoint[r]) result[g]++;
                    else if (giftPoint[r] > giftPoint[g]) result[r]++;
                }
            } else {
                if (giftPoint[g] > giftPoint[r]) result[g]++;
                else if (giftPoint[r] > giftPoint[g]) result[r]++;
            }
        }
    }
    answer = Math.max(...Object.values(result)) / 2;
    return answer;
}
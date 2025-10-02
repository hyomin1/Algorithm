function solution(coin, cards) {
    var answer = 1;
    const n = cards.length;
    
    const myCard = new Set(cards.slice(0, n / 3));
    const remainSet = cards.slice(n / 3);

    const pool = []; 

    while (true) {
        if (remainSet.length === 0) break; // 카드 뭉치 없는 경우 종료

        pool.push(remainSet.shift());
        pool.push(remainSet.shift());

        let found = false;

        // 내 카드 2장으로 해결 (코인 0)
        for (const card of myCard) {
            if (myCard.has(n + 1 - card)) {
                myCard.delete(card);
                myCard.delete(n + 1 - card);
                found = true;
                break;
            }
        }
        if (found) {
            answer++;
            continue;
        }

        if (coin >= 1) {
            let found2 = false;
            for (const card of myCard) {
                for (const card2 of pool) {
                    if (card + card2 === n + 1) {
                        myCard.delete(card);
                        pool.splice(pool.indexOf(card2), 1);
                        coin--;
                        found2 = true;
                        break;
                    }
                }
                if (found2) break;
            }
            if (found2) {
                answer++;
                continue;
            }
        }

        // 코인 2개 쓰는경우
        if (coin >= 2) {
            let found3 = false;
            for (let i = 0; i < pool.length; i++) {
                for (let j = i + 1; j < pool.length; j++) {
                    if (pool[i] + pool[j] === n + 1) {
                        pool.splice(j, 1);
                        pool.splice(i, 1);
                        coin -= 2;
                        found3 = true;
                        break;
                    }
                }
                if (found3) break;
            }
            if (found3) {
                answer++;
                continue;
            }
        }

       
        break;
    }
    return answer;
}

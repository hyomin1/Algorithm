function solution(enroll, referral, seller, amount) {
    var answer = [];
    const recommender = {};
    const totalAmount = {};
    for (let i = 0; i < enroll.length; i++) {
        const reCommenderName = referral[i];
        const myName = enroll[i];
        totalAmount[myName] = 0;
        if (reCommenderName === '-') continue;
        recommender[myName] = reCommenderName;
        
    }
    function dfs(name,money) {

        const up = Math.floor(money / 10);
        const mine = money - up;
        totalAmount[name] += mine;
        if (!recommender[name] || up === 0) {
            return;
        }
        dfs(recommender[name],up)
        
    }
    
    for (let i = 0; i < seller.length; i++) {
        dfs(seller[i],amount[i]*100);
    }

    
    answer = Object.values(totalAmount);
    return answer;
}
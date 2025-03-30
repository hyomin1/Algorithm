function solution(enroll, referral, seller, amount) {
    var answer = [];
    let parent = {};
    let total = {};
    enroll.forEach((e,i) => {
        parent[e] = referral[i];
        total[e] = 0;
    });
    for (let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100;
        let curName = seller[i];
        while(money > 0 && curName !== '-') {
            total[curName] += money - Math.floor(money * 0.1);
            curName = parent[curName];
            money = Math.floor(money * 0.1);
        }
    }
    answer = Object.values(total);
   
    
    return answer;
}
function solution(friends, gifts) {
    var answer = 0;
    const giveMap = {}; // 준 선물 개수
    const receiveMap = {}; // 받은 선물 개수
    const map = {};
    const giftMap = {}; // 선물 지수
    
    const answerMap = {};
    for (let i = 0; i < friends.length; i++) {
        giveMap[friends[i]] = 0;
        receiveMap[friends[i]] = 0;
        answerMap[friends[i]] = 0;
        map[friends[i]] = {};
    }
    for (let i = 0; i < friends.length; i++) {
        const me = friends[i];
        for (let j = 0; j <friends.length; j++) {
            const other = friends[j];
            if (me === other) continue;
            map[me][other] = 0;
        }
    }
    
    for (let i = 0; i < gifts.length; i++) {
        const [giver,receiver] = gifts[i].split(' ');
        giveMap[giver]++;
        receiveMap[receiver]++;
        map[giver][receiver]++;;
    }
    for (let i = 0; i < friends.length; i++) {
        const name = friends[i];
        giftMap[name] = giveMap[name] - receiveMap[name];
    }
    console.log(map);
    for (let i = 0; i < friends.length; i++) {
        const me = friends[i];
        for (let j = 0; j < friends.length; j++) {
            const other = friends[j];
            if(me === other) continue;
           
            if (map[me][other] > map[other][me]) {
                answerMap[me]++;
            }
            else if (map[me][other] < map[other][me]) {
                answerMap[other]++;
            }
            else {
                if (giftMap[me] > giftMap[other]) answerMap[me]++;
                else if (giftMap[me] < giftMap[other]) answerMap[other]++;
            }
        }
    }
    const arr = Object.values(answerMap);
  
    answer = Math.max(...arr) / 2;
   
    return answer;
}
function isRight(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) return false;
    
    for (const key of obj1Keys) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

function solution(want, number, discount) {
    var answer = 0;
    const obj = {};
    for (let i = 0; i < want.length; i++) {
        obj[want[i]] = number[i];
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const dis = {};
        for (let j = i; j < i + 10; j++) {
            dis[discount[j]] = (dis[discount[j]] || 0 ) + 1;
            
        }
        if(isRight(obj,dis)) answer++;
    }
    return answer;
}
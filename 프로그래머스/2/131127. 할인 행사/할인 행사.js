function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

function solution(want, number, discount) {
    var answer = 0;
    const obj1 = {};
    for (let i = 0; i < want.length; i++) {
        obj1[want[i]] = number[i];
    }
    
    for (let i = 0; i <= discount.length - 10 ;i++) {
        const obj2 = {};
        for (let j = i; j < i + 10; j++) {
            obj2[discount[j]] = (obj2[discount[j]] || 0) + 1;
        }
        if (isEqual(obj1,obj2)) answer++;
    }
    return answer;
}
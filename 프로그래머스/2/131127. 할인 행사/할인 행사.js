function isShallowEqual(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    
    if (obj1Keys.length !== obj2Keys.length) return false;
    
    for (const key of obj1Keys) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        
        if (value1 !== value2) return false;
    }
    return true;
}

function solution(want, number, discount) {
    var answer = 0;
    const wantObj = {};
    want.forEach((v, i) => wantObj[v] = number[i]);
    
    for (let i = 0; i < discount.length - 9; i++) {
        const discount10d = {};
        for (let j = i; j < i + 10; j++) {
            discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
        }
        if(isShallowEqual(wantObj,discount10d)) answer++;
        
    }
    return answer;
}
function createObject(arr,obj) {
     for(let i = 0; i < arr.length;i++) {
        const sNum = arr[i];
        if(!obj[sNum]) obj[sNum] = 1;
        else obj[sNum]++;
    }
}

function solution(X, Y) {
    var answer = '';
    const x = {};
    const y = {};
    createObject(X,x);
    createObject(Y,y);
    const xArr = Object.keys(x);
    const yArr = Object.keys(y);
    
    const newArr = xArr.filter((v) => yArr.includes(v));
    
    for(let i = 0; i < newArr.length; i++) {
        const key = newArr[i];
        const min = Math.min(x[key],y[key]);
        answer += key.repeat(min);
    }
    if(answer.length === 0) return '-1';
    
    answer = answer.split('').sort((a,b)=>b-a).join('');
    if(answer[0] === '0') return '0';
    
    return answer;
}
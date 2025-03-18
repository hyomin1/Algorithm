function isStr(str) {
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (!(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z'))) {
            return false;
        } 
    }
    return true;
}

function divideStr(str, arr) {
    for (let i = 0; i < str.length - 1; i++) {
        const s = str[i] + str[i+1];
        if(isStr(s)) arr.push(s);
    }
}

function solution(str1, str2) {
    var answer = 0;  
    const arr1 = [];
    const arr2 = [];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    divideStr(str1,arr1);
    divideStr(str2,arr2);
    const arr2Copy = [...arr2];
    let intersection = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr2Copy.includes(arr1[i])) {
            const index = arr2Copy.indexOf(arr1[i]);
            arr2Copy.splice(index,1);
            intersection++;
        }
    }
    const union = arr1.length + arr2.length - intersection;
    const j = arr1.length === 0 && arr2.length === 0 ? 1 : intersection / union
    answer = j * 65536;
    return Math.floor(answer);
}
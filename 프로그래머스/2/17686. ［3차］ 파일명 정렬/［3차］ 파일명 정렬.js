function makeHead(str) {
    let head = '';
    let index = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            index = i;
            break;
        }
        head += str[i];
    }
    return [head.toLowerCase(),index];
}

function makeNumber(str,index) {
    let count = 0;
    let number = '';
    for (let i = index; i < str.length; i++) {
        if (count === 5 || str[i] < '0' || str[i] > '9') break;
        if (str[i] >= '0' && str[i] <= '9') {
            count++;
            number += str[i];
        }
    }
    return Number(number);
}

function solution(files) {
    files.sort((a,b) => {
        const [h1,index1] = makeHead(a);
        const [h2,index2] = makeHead(b);
        const n1 = makeNumber(a,index1);
        const n2 = makeNumber(b,index2);
        if (h1 === h2) return n1 - n2;
        return h1.localeCompare(h2);
    });
    return files;
}
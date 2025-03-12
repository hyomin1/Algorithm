function sortArr(arr) {
    return arr.sort((a,b) => a - b);
}

function solution(sizes) {
    var answer = 0;
    const widthArr = [];
    const heightArr = [];
    for(let i = 0; i < sizes.length; i++) {
        const arr = sortArr(sizes[i]);
        const [first, second] = arr;
        widthArr.push(first);
        heightArr.push(second);
    }
    sortArr(widthArr);
    sortArr(heightArr);
    answer = widthArr[widthArr.length - 1] * heightArr[heightArr.length - 1];
    return answer;
}


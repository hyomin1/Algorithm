function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        let num = arr1[i] | arr2[i];
        let bin = num.toString(2);
        let str = "";
        for(let j = 0; j < n - bin.length; j++) {
            str += "0";
        }
        bin = str + bin;
        console.log(bin);
        let find = "";
        for(let j = 0; j < bin.length; j++) {
            if(bin[j] === "1") find += "#";
            else if(bin[j] === "0")find += " ";
        }
        answer.push(find);
    }
    return answer;
}
function solution(s) {
    var answer = 0;
    const numStr = ["zero","one","two","three","four","five",
                   "six","seven","eight","nine"];
    for(let i = 0; i < numStr.length; i++) {
        s = s.replaceAll(numStr[i],i);
    }
    answer = parseInt(s);
    return answer;
}
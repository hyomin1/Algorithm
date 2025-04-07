function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a,b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b);
        }
        return a[n].localeCompare(b[n]);
    });
    return answer;
}
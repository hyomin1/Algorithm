function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a - b);
    let s = 0;
    let e = people.length - 1;
    
    while (s <= e) {
        if (people[s] + people[e] <= limit) {
            s++;
        }
        e--;
        answer++;
    }
    return answer;
}
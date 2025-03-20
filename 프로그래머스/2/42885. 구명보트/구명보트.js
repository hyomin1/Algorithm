function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a - b);
    
    let l = 0;
    let r = people.length - 1;
    while(l <= r) {
        if (people[l] + people[r] <= limit) {
            l++;
        }
        r--;
        answer++;
    }
    return answer;
}
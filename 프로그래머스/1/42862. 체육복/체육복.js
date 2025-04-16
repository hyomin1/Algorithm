function solution(n, lost, reserve) {
    var answer = 0;
    const students = Array(n+1).fill(1);
    lost.forEach((l) => students[l]--);
    reserve.forEach((r) => students[r]++);
    
    for (let i = 1; i <= students.length; i++) {
        if (students[i] === 0) { // 체육복 없는 경우
            if (students[i-1] === 2) { // 앞 학생 여벌 있는 경우
                students[i-1]--;
                students[i]++;
            } else if (students[i+1] === 2) {
                students[i+1]--;
                students[i]++;
            }
        }
    }
    answer = students.filter((s) => s > 0).length - 1;
    return answer;
}
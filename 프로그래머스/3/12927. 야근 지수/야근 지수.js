function solution(n, works) {
    var answer = 0;
    works.sort((a,b) => b - a);
    
    while (n > 0) {
        const max = works[0];
        
        for (let i = 0; i < works.length; i++) {
            if (max <= works[i]) {
                works[i]--;
                n--;
            }
            if (n < 1) break;
        }
        
    }
    works = works.map((work) => work < 0 ? 0 : work);
    answer = works.reduce((sum,work) =>sum + work ** 2,0)
    console.log(works);
    
    return answer;
}
function solution(n) {
    var answer = 0;
   
    
    const count1 = n.toString(2).split('').filter((v)=> v==='1').length;
    
    while (true) {
        n++;
        let count2 = n.toString(2).split('').filter((v)=> v==='1').length;
        if (count1 === count2) break;
        
    }
    return n;
}
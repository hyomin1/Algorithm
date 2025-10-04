function solution(numbers) {
    var answer = [];
    
    function check(bin) {
        if (bin.length === 1) return true;
        const mid = Math.floor(bin.length/2);
        
        const root = bin[mid];
        const left = bin.slice(0,mid);
        const right = bin.slice(mid+1);
        
        if (root === '0') {
            if (left.includes('1') || right.includes('1')) return false;
        }
        
        if(!check(left)) return false;
        if (!check(right)) return false;
    
        
        return true;
        
    }
    
    for (const num of numbers) {
        let bin = num.toString(2);
        let size = 1;
        while (size < bin.length) {
            size = size * 2 + 1;
        }
        
        bin = bin.padStart(size,'0');
      
        const value = check(bin) ? 1 : 0;
        answer.push(value);
    }
    return answer;
}
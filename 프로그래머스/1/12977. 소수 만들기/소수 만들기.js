function isPrimeNumber(num) {
    const sqrt = Math.floor(Math.sqrt(num));
    let count = 0;
    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) count+=2;
    }
    if(sqrt * sqrt === num) count--;
  
    return count === 2 ? true : false;
}

function solution(nums) {
    let answer = 0;
 
    for(let i = 0; i < nums.length - 2; i++) {
        let sum = 0;
        for (let j = i + 1; j < nums.length - 1; j++)  {
            for (let k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                 if (isPrimeNumber(sum)) {
                    answer++;
                 }
            }
        }
       
    }
    
    return answer;
}
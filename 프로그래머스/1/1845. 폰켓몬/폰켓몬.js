function solution(nums) {
    let answer = 0;
    const set = [...new Set(nums)];
    
    const N = nums.length / 2;
    
    return set.length > N ? N : set.length;
}
function solution(nums) {
    var answer = 0;
    const N = nums.length / 2;
    const size = new Set(nums).size;
    return N <= size ? N : size;
}
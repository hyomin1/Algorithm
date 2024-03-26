class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int size = (nums.length * (nums.length - 1) * (nums.length - 2)) / 6;
        int[] newNum = new int[size];
        int idx = 0;
        for(int i = 0; i < nums.length - 2; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                for(int k = j + 1; k < nums.length; k++) {
                    newNum[idx++] = nums[i] + nums[j] + nums[k];
                }
            }
        }
    
        for(int i = 0; i < size; i++) {
            int sq = (int) Math.sqrt(newNum[i]);
            int count = 0;
            for(int j = 1 ; j <= sq; j++) {
                if(newNum[i] % j == 0) {
                    count += 2;
                }
            }
            if(sq * sq == newNum[i]) {
                count--;
            }
          
            if (count == 2) {
                answer++;
            }
        }

        return answer;
    }
}
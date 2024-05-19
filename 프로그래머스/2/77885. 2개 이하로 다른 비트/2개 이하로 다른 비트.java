class Solution {
    public long[] solution(long[] numbers) {
        long[] answer = new long[numbers.length];
        for(int i = 0; i < numbers.length; i++) {
            if(numbers[i] % 2 == 0) {
                answer[i] = numbers[i]+1;
            }
            else {
                long bit = 1;
                while((numbers[i] & bit) != 0) {
                    bit <<= 1;
                    
                }
                numbers[i] = numbers[i] + bit - (bit >> 1);
                answer[i] = numbers[i];
                
            }
            
        }
        return answer;
    }
}
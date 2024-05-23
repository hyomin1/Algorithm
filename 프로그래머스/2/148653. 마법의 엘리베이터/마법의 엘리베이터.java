class Solution {
    public int solution(int storey) {
        int answer = 0;
        while(storey != 0) {
            int mod = storey % 10;
            if(mod < 5) {
                answer += mod;
            }
            else if(mod > 5) {
                answer += 10 - mod;
                storey += 10- mod;
            }
            else {
                int prev = storey / 10 % 10;
                if(prev < 5) {
                    answer +=5;
                }
                else {
                    answer += 5;
                    storey += 5;
                }
            }
           
            storey /= 10;
        }
        
        
     
        return answer;
    }
}
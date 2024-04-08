class Solution {
    public String solution(int a, int b) {
        String[] days ={"THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"};
        int sumDay = 0;
        for(int i = 1 ; i < a; i++) {
            if(i == 2) {
                sumDay += 29;
                continue;
            }
            if (i <= 7) {
                if(i % 2 == 0) {
                sumDay += 30;
            }
            else {
                sumDay += 31;
            }
            }
            else {
                if(i % 2 == 0) {
                sumDay += 31;
            }
            else {
                sumDay += 30;
            }
            }
            
        }
        sumDay += b;
        String answer = days[sumDay % 7];
        
        
        
        return answer;
    }
}
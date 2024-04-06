import java.util.*;
class Solution {
    public int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
        Double[] scores = new Double[N];
        
        
        for(int i = 0; i < N; i++) {
            double cnt1 = 0; //분모
            double cnt2 = 0; //분자
            for(int j = 0; j < stages.length; j++) {
                if(stages[j] >= i+1) {
                    cnt1++;
                }
                if(i < stages[j] && stages[j] <= i + 1) {
                    cnt2++;
                }
            }
            if(cnt1 == 0.0) {
                scores[i] = 0.0;
            }
            else {
                scores[i] = cnt2 / cnt1;    
            }
            
        }
        Double[] scoresCopy = scores.clone();
        
        Arrays.sort(scoresCopy,Collections.reverseOrder());
        
        
        
       for(int i = 0; i < N; i++) {
           for(int j = 0; j < N; j++) {
               if(scoresCopy[i] == scores[j]) {
                   answer[i] = j + 1;
                   System.out.print(j+1 + "index");
                   break;
               }
           }
       }
        
        
        return answer;
    }
}
import java.util.*;
class Solution {
    public String solution(String X, String Y) {
        String answer = "";
        StringBuilder sb = new StringBuilder();
        int[] x = new int[10];
        int[] y = new int[10];
        
        for(char c : X.toCharArray()) {
            x[c - '0']++;
        }
        for(char c : Y.toCharArray()) {
            y[c - '0']++;
        }
        
        for(int i = 9 ; i >=0; i--) {
            int min = Math.min(x[i],y[i]);
            for(int j = 0; j < min; j++) {
                sb.append(String.valueOf(i));
            }
        }
        answer = sb.toString();
        if(answer.isEmpty()) {
            return "-1";
        }
        else if(answer.charAt(0) == '0') {
            return "0";
        }
        else {
            return answer;
        }
      
        
        
    }
}
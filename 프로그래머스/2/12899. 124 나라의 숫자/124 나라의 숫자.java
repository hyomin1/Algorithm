import java.util.*;
class Solution {
    public String solution(int n) {
        String answer = "";
        StringBuilder sb = new StringBuilder();
        while(n != 0) {
            int mod = n % 3;
            n /= 3;
            if(mod == 0) {
                sb.append("4");
                n -= 1;
            } 
            else if(mod == 1) {
                sb.append("1");
            }
            else if(mod == 2) {
                sb.append("2");
            }
            
        }
        return sb.reverse().toString();
    }
}